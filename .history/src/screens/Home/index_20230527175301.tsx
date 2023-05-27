import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import { useQuery, useRealm } from "../../libs/realm";
import { Historic } from "../../libs/realm/schemas/Historic";

import { CarStatus } from "../../components/CarStatus";
import { HomeHeader } from "../../components/HomeHeader";

import { Container, Content } from "./styles";
import { HistoricCard, HistoricCardProps } from "../../components/HistoricCard";
import dayjs from "dayjs";

export function Home() {
  const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null);
  const [vehicleHistoric, setVehicleHistoric]= useState<HistoricCardProps[]>([])
  const { navigate } = useNavigation();
  const realm = useRealm();

  const historic = useQuery(Historic);

  function handleRegisterMovement() {
    if (vehicleInUse?._id) {
      return navigate("arrival", { id: vehicleInUse?._id.toString() });
    } else {
      navigate("departure");
    }
  }

  function fetchVehicleInUse() {
    try {
      const vehicle = historic.filtered("status = 'departure'")[0];
      setVehicleInUse(vehicle);
    } catch (error) {
      Alert.alert(
        "Veículo em uso",
        "Não foi possível carregar o veículo em uso."
      );
    }
  }

  function fetchHistoric() {
    const response = historic.filtered(
      'status = "arrival" SORT(created_at DESC)'
    );
    const formattedHistoric = response.map((item) => {
      return ({
        id: item._id!.toString(),
        licensePlate: item.license_plate,
        created: dayjs(item.created_at).format('[Saída em] DD/YY/MMMM [ás] HH:mm'),
        isSync: false
      })
    })
  }

  useEffect(() => {
    fetchVehicleInUse();
  }, []);

  useEffect(() => {
    realm.addListener("change", () => {
      fetchVehicleInUse();
    });

    return () => realm.removeListener("change", fetchVehicleInUse);
  }, []);

  useEffect(() => {
    fetchHistoric();
  }, [historic]);

  return (
    <Container>
      <HomeHeader />
      <Content>
        <CarStatus
          onPress={handleRegisterMovement}
          licensePlate={vehicleInUse?.license_plate}
        />
        <HistoricCard
          data={{ created: "20/04", licensePlate: "xxx2222", isSync: true }}
        />
      </Content>
    </Container>
  );
}
