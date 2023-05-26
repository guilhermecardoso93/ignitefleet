import { useRoute } from '@react-navigation/native';

import { Container, Label } from './styles';

type RouteParmasProps = {
  id: string
}

export function Arrival() {
  const route = useRoute()
  const { id } = route.params as RouteParmasProps

  return (
    <Container>
      <Label>
        Placa do Veículo
      </Label>
    </Container>
  );
}