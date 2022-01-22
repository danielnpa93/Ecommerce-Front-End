import React from 'react';
import { Input, Button } from 'components';
import { SignUp as SignUpModal } from './signup-modal';
import { Container, LoginBox, RegisterButton } from './styles';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export function Login() {
  const [isOpenModal, setOpenModal] = React.useState<boolean>(false);

  return (
    <>
      <Container>
        <LoginBox>
          <h1>
            E<span style={{ color: '#b4980d' }}>C</span>ommerce
          </h1>
          <form>
            <Input
              placeholder="Username"
              id="user"
              autoComplete="ecomerceUsername"
              name="usernameEcommerce"
            />
            <Input
              placeholder="Password"
              type="password"
              id="pass"
              autoComplete="ecomerceUserPass"
              name="userPassEcommerce"
            />
            <Button
              type="submit"
              style={{ height: '40px', borderRadius: '5px' }}
            >
              Login
            </Button>
          </form>
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
