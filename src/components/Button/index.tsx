import React from 'react';
import { Button as StyledButton } from './styles';
import LoadIcon from 'assets/LoadIcon';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  background?: string;
}

export function Button({
  loading,
  disabled,
  children,
  background,
  ...rest
}: IProps) {
  return (
    <StyledButton {...rest} disabled={disabled} background={background}>
      {loading ? <LoadIcon /> : children}
    </StyledButton>
  );
}
