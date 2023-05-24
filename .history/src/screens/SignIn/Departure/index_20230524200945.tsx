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
  const [description, setDescription] = useState('')
  const [licensePlate, setLicensePlate] = useState('')

  const descriptionRef = useRef<TextInput>(null);
  const licensePlateRef = useRef<TextInput>(null);

  function handleDepartureRegister() {
    if (!licensePlateValidate(licensePlate)) {
      licensePlateRef.current?.focus()
      return Alert.alert('Placa inválida', 'A placa é inválida. Por favor, informar número de placa correta do veículo.')
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
            <Button title="Registrar Saída" onPress={handleDepartureRegister} />
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}
