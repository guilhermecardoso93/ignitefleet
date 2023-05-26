import { useRoute } from "@react-navigation/native";

import { Container, Content, Description, Footer, Label, LicensePlate } from "./styles";
import { X } from 'phosphor-react-native';

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";

type RouteParmasProps = {
  id: string;
};

export function Arrival() {
  const route = useRoute();
  const { id } = route.params as RouteParmasProps;

  return (
    <Container>
      <Header title="Chegada" />

      <Content>
        <Label>Placa do Veículo</Label>
        <LicensePlate>XXX0000</LicensePlate>
        <Label>Finalidade</Label>
        <Description>Lorekfsdlkgjfkdsgjjkdfs dfgnisdnfginsdiongisgsidgns</Description>

        <Footer>
          <ButtonIcon icon={X}/>
          <Button title="Registrar Chegada"/>
        </Footer>
      </Content>
    </Container>
  );
}
