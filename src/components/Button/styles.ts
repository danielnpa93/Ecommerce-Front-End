import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button<{ background?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-button);

  border: none;

  background-color: ${props =>
    props.background
      ? shade(0.1, props.background)
      : 'var(--background-button)'};

  width: 100%;
  height: 100%;

  font-size: 0.8rem;
  font-weight: bold;
  font-stretch: normal;
  line-height: normal;
  text-transform: uppercase;

  transition: all 0.5s;

  :disabled {
    background: ${props =>
      props.background
        ? shade(0.3, props.background)
        : 'var(--background-button-disabled)'};
    color: 'var(--color-button-disabled)';
  }

  :not(:disabled):hover {
    background-color: ${props =>
      props.background ? props.background : 'var(--background-button-hover)'};
    color: var(--color-button-hover);
  }

  :focus {
    outline: none;
  }
`;
