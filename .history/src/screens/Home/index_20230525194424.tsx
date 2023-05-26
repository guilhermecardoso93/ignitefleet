import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { useQuery } from "../../libs/realm";
import { Historic } from "../../libs/realm/schemas/Historic";

import { CarStatus } from "../../components/CarStatus";
import { HomeHeader } from "../../components/HomeHeader";

import { Container, Content } from "./styles";

export function Home() {
  const { navigate } = useNavigation();

  const historic = useQuery(Historic);

  function handleRegisterMoviment() {
    navigate("departure");
  }

  function fetchVehicle() {
    const vehicle = historic.filtered(" status = 'departure")

    console.log(historic)
  }

  useEffect(() => {
    fetchVehicle()
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
