import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import BackgroundImg from "../assets/background.png";
import { Button } from "../components/Button";

import { Container, Slogan, Title } from "./styles";
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from '@env';

export function SignIn() {

  Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    scopes: ['profile', 'email']
  })

  return (
    <Container source={BackgroundImg}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
      <Button title="Entrar com Google" />
    </Container>
  );
}
