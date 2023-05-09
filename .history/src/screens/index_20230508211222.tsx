import BackgroundImg from '../assets/background.png'

import { Container, Slogan, Title } from './styles';

export function SignIn() {
  return (
    <Container source={BackgroundImg}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
    </Container>
  );
}

