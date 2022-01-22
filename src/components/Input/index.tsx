import { Input as StyledInput } from './styles';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: IProps) {
  return <StyledInput {...rest} />;
}
