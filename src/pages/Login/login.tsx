import React from 'react';
import { Input, Button } from 'components';
import { SignUp as SignUpModal } from './signup-modal';
import { Container, LoginBox, RegisterButton, FormControl } from './styles';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ReduxProps } from '.';

export function Login({ isLoading, onLogin }: ReduxProps) {
  const [isOpenModal, setOpenModal] = React.useState<boolean>(false);

  return (
    <>
      <Container>
        <LoginBox>
          <h1>
            E<span style={{ color: '#b4980d' }}>C</span>ommerce
          </h1>
          <Formik
            initialValues={{
              password: '',
              username: '',
            }}
            validationSchema={Yup.object().shape({
              password: Yup.string().required('Password is required'),
              username: Yup.string().required('Username is required'),
            })}
            onSubmit={async values => {
              const { password, username } = values || {};
              onLogin({ username, password });
            }}
          >
            {({ handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Username"
                    autoComplete="off"
                    name="username"
                    type="text"
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
                    type="password"
                    name="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </FormControl>

                <Button
                  type="submit"
                  loading={isLoading}
                  disabled={isLoading}
                  style={{ height: '40px', borderRadius: '5px' }}
                >
                  Login
                </Button>
              </form>
            )}
          </Formik>
          <RegisterButton onClick={() => setOpenModal(true)}>
            Don't have an account yet? Register here.
          </RegisterButton>
        </LoginBox>
      </Container>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {isOpenModal && <SignUpModal onClose={() => setOpenModal(false)} />}
      </ReactCSSTransitionGroup>
    </>
  );
}
