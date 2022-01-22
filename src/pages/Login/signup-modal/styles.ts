import styled from 'styled-components';

export const modalStyles = {
  width: '50%',
  maxWidth: '400px',
  borderRadius: '5px',
};

export const SignUpForm = styled.form`
  margin-top: 20px;
`;

export const FormControl = styled.div`
  height: 60px;

  & > input {
    background: #f5f6f7;
    color: #000;
    text-shadow: none;
  }
`;

export const buttonStyles = {
  margiTop: '20px',
  height: '40px',
  width: '50%',
  margin: 'auto',
  borderRadius: '5px',
};
