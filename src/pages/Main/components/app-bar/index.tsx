import { AppBar as Container } from 'components/AppBar';
import { Appbar, LogoutButton, Logo } from './styles';

interface Props {
  onLogout(): void;
}

export function AppBar({ onLogout }: Props) {
  return (
    <Container>
      <Appbar>
        <Logo />
        <LogoutButton onClick={onLogout} />
      </Appbar>
    </Container>
  );
}
