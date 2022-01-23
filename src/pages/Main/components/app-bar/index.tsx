import { AppBar as Container, Button } from 'components';
import { Appbar, LogoutButton, Logo } from './styles';

const buttonStyle = {
  width: 'min-content',
  height: 'min-content',
  padding: '8px 20px',
  borderRadius: '15px',
};

interface Props {
  onLogout(): void;
}

export function AppBar({ onLogout }: Props) {
  return (
    <Container>
      <Appbar>
        <h1>
          E<span style={{ color: '#b4980d' }}>C</span>ommerce
        </h1>
        <Button style={buttonStyle} onClick={onLogout}>
          Logout
        </Button>
      </Appbar>
    </Container>
  );
}
