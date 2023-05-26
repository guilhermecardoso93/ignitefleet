import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { useQuery } from "../../libs/realm";
import { Historic } from "../../libs/realm/schemas/Historic";

import { CarStatus } from "../../components/CarStatus";
import { HomeHeader } from "../../components/HomeHeader";

import { Container, Content } from "./styles";

export function Home() {
  const [ vehicleInUse, setVehicleInUse] = useState<Historic | null>(null)
  const { navigate } = useNavigation();

  const historic = useQuery(Historic);

  function handleRegisterMoviment() {
    navigate("departure");
  }

  function fetchVehicle() {
    const vehicle = historic.filtered("status = 'departure'")[0];

    console.log(vehicle);
  }

  useEffect(() => {
    fetchVehicle();
  }, []);

  return (
    <Container>
      <HomeHeader />
      <Content>
        <CarStatus onPress={handleRegisterMoviment} />
      </Content>
    </Container>
  );
}
