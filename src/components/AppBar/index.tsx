import { Appbar } from './styles';

interface Props {
  children: React.ReactNode;
}

export function AppBar(props: Props) {
  return <Appbar>{props.children}</Appbar>;
}
