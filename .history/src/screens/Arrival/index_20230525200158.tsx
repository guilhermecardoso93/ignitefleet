import { useRoute } from "@react-navigation/native";

import { Container, Content, Description, Label, LicensePlate } from "./styles";
import { Header } from "../../components/Header";

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
      </Content>
    </Container>
  );
}
