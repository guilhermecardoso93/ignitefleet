import { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

import { Container, Title, Slogan } from "./styles";

import backgroundImg from "../assets/background.png";

import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from "@env";
import { Button } from "../components/Button";
import { Alert } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [_, response, googleSignIng] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    scopes: ["profile", "email"],
  });

  function handleGoogleSignIn() {
    setIsAuthenticating(true);

    googleSignIng().then((response) => {
      if (response?.type !== "success") {
        setIsAuthenticating(false);
      } else {
        Alert.alert(
          "Entrar",
          "Não foi possível conectar com a conta do Google!"
        );
        setIsAuthenticating(false);
      }
    });
  }

  useEffect(() => {
    if (response?.type === "success") {
      if (response.authentication?.idToken) {
        fetch(
          `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${response.authentication?.idToken}`
        );
      }
    }
  }, [response]);

  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>

      <Slogan>Gestão de uso de veículos</Slogan>

      <Button
        title="Entrar com Google"
        onPress={handleGoogleSignIn}
        isLoading={isAuthenticating}
      />
    </Container>
  );
}
