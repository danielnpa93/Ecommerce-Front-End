import { Container } from './styles';

interface Props {
  children: React.ReactNode;
}

export function MainContainer(props: Props) {
  return <Container>{props.children}</Container>;
}
