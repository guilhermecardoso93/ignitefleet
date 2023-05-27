import { useRoute } from "@react-navigation/native";
import { Alert } from "react-native";
import { useObject, useRealm } from "../../libs/realm";
import { Historic } from "../../libs/realm/schemas/Historic";
import { BSON } from "realm";

import {
  Container,
  Content,
  Description,
  Footer,
  Label,
  LicensePlate,
} from "./styles";
import { X } from "phosphor-react-native";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";


type RouteParmasProps = {
  id: string;
};

export function Arrival() {
  const route = useRoute();
  const { id } = route.params as RouteParmasProps;

  const historic = useObject(Historic, new BSON.UUID(id));
  const realm = useRealm()

  function removeVehicleUsage(){
    realm.write(() => {
      realm.delete(historic)
    })
  }

  function handleDelete(){
    Alert.alert('Cancelar', 'Cancelar a utilização do veículo?', [
      { text: 'Não', style: 'cancel'},
      { text: 'Sim', onPress: () => removeVehicleUsage()}
    ])
  }

  return (
    <Container>
      <Header title="Chegada" />

      <Content>
        <Label>Placa do Veículo</Label>
        <LicensePlate>{historic?.license_plate}</LicensePlate>
        <Label>Finalidade</Label>
        <Description>
          {historic?.description}
        </Description>

        <Footer>
          <ButtonIcon icon={X} />
          <Button title="Registrar Chegada" />
        </Footer>
      </Content>
    </Container>
  );
}
