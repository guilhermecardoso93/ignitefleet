import React, { useRef } from "react";
import { TextInput } from "react-native";

import { Container, Content } from "./styles";

import { Header } from "../../../components/Header";
import { LicensePlateInput } from "../../../components/LicensePlateInput";
import { TextAreaInput } from "../../../components/TextAreaInput";
import { Button } from "../../../components/Button";


export function Departure() {
  const descriptionRef = useRef<TextInput>(null)

  function handleDepartureRegister(){
    console.log('oi')
  }

  return (
    <Container>
      <Header title="Saída" />
      <Content>
        <LicensePlateInput 
          label="Placa do Veículo" 
          placeholder="BRA1234"
          onSubmitEditing={() => descriptionRef.current?.focus()}
          returnKeyType="next"
        />
        <TextAreaInput
          label="Finalidade"
          placeholder="Vou utilizar o veículo para..."
          ref={descriptionRef}
        />
        <Button title="Registrar Saída" onPress={handleDepartureRegister}/>
      </Content>
    </Container>
  );
}
