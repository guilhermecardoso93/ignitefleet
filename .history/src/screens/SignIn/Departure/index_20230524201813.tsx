import React, { useRef, useState } from "react";
import {
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import { Container, Content } from "./styles";

import { Header } from "../../../components/Header";
import { LicensePlateInput } from "../../../components/LicensePlateInput";
import { TextAreaInput } from "../../../components/TextAreaInput";
import { Button } from "../../../components/Button";
import { licensePlateValidate } from "../../../utils/licensePlateValidate";

const keyboardAvoidingViewBehavior =
  Platform.OS == "android" ? "height" : "position";

export function Departure() {
  const [description, setDescription] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const descriptionRef = useRef<TextInput>(null);
  const licensePlateRef = useRef<TextInput>(null);

  function handleDepartureRegister() {
    try {
      if (!licensePlateValidate(licensePlate)) {
        licensePlateRef.current?.focus();
        return Alert.alert(
          "Placa inválida",
          "A placa é inválida. Por favor, informar número de placa correta do veículo."
        );
      }

      if (description.trim().length === 0) {
        descriptionRef.current?.focus();
        return Alert.alert(
          "Descrição inválida",
          "Por favor, informar a finalidade do uso do carro."
        );
      }
      setIsRegistering(true);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Não foi possível registrar a saída do veículo");
      setIsRegistering(false);
    }
  }

  return (
    <Container>
      <Header title="Saída" />
      <KeyboardAvoidingView
        behavior={keyboardAvoidingViewBehavior}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <Content>
            <LicensePlateInput
              label="Placa do Veículo"
              placeholder="BRA1234"
              onSubmitEditing={() => descriptionRef.current?.focus()}
              onChangeText={setLicensePlate}
              returnKeyType="next"
              ref={licensePlateRef}
            />
            <TextAreaInput
              label="Finalidade"
              placeholder="Vou utilizar o veículo para..."
              ref={descriptionRef}
              onSubmitEditing={handleDepartureRegister}
              returnKeyType="send"
              blurOnSubmit
              onChangeText={setDescription}
            />
            <Button
              title="Registrar Saída"
              onPress={handleDepartureRegister}
              isLoading={isRegistering}
            />
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}
