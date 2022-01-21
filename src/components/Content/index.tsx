import { Content } from './styles';

interface Props {
  children: React.ReactNode;
}

export function AppContent(props: Props) {
  return <Content>{props.children}</Content>;
}
