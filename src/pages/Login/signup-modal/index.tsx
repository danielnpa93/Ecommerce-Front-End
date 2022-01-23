import { Modal, Input, Button } from 'components';
import { modalStyles, SignUpForm, FormControl, buttonStyles } from './styles';
import { handleError, Notification } from 'utils/notifications';
import { users } from 'store/api/agent';
import { useWindowSize } from 'hooks/windowSize';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface IProps {
  onClose(): void;
}

const FULL_WIDTH_MODAL = 450;

const getModalStyles = width => {
  if (width <= FULL_WIDTH_MODAL) {
    return {
      ...modalStyles,
      width: '100%',
      borderRadius: 'none',
      height: '100%',
      maxWidth: 'unset',
    };
  }
  return { ...modalStyles };
};

export function SignUp(props: IProps) {
  const { onClose } = props || {};
  const { width = 0 } = useWindowSize();

  return (
    <Modal style={getModalStyles(width)} onClose={onClose} title="Sign Up">
      <Formik
        initialValues={{
          password: '',
          username: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string()
            .required('Password is required')
            .matches(/^.{6,}$/, 'Minimum of 6 characters'),
          username: Yup.string().required('Username is required'),
          confirmPassword: Yup.string()
            .required('Confirm password is required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        })}
        onSubmit={async (values, actions) => {
          const { password, confirmPassword, username } = values || {};
          actions.setSubmitting(true);

          try {
            await users.create({ username, password, confirmPassword });
            Notification('success', 'User created successfully!');
            setTimeout(() => onClose(), 200);
          } catch (error: any) {
            handleError(error.message);
          } finally {
            actions.setSubmitting(false);
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <SignUpForm onSubmit={handleSubmit}>
            <FormControl>
              <Input
                placeholder="Username"
                autoComplete="off"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="username"
                component="div"
                className="invalid-feedback"
              />
            </FormControl>
            <FormControl>
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
                autoComplete="off"
                name="password"
                type="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </FormControl>
            <FormControl>
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Confirm Password"
                autoComplete="off"
                name="confirmPassword"
                type="password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="invalid-feedback"
              />
            </FormControl>
            <Button
              loading={isSubmitting}
              disabled={isSubmitting}
              style={buttonStyles}
              background="#4d4d4d"
              type="submit"
            >
              Register
            </Button>
          </SignUpForm>
        )}
      </Formik>
    </Modal>
  );
}
