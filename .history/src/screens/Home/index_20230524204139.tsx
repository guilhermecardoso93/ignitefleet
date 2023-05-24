import { useNavigation } from "@react-navigation/native";

import { useQuery } from "../../libs/realm";

import { CarStatus } from "../../components/CarStatus";
import { HomeHeader } from "../../components/HomeHeader";

import { Container, Content } from "./styles";


export function Home() {
  const { navigate } = useNavigation()

  const historic = useQuery()

  function handleRegisterMoviment(){
    navigate('departure')
  }
  return (
    <Container>
      <HomeHeader />
      <Content>
        <CarStatus onPress={handleRegisterMoviment}/>
      </Content>
    </Container>
  );
}