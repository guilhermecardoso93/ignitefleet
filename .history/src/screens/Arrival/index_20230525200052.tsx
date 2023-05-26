import { useRoute } from '@react-navigation/native';

import { Container, Content, Label } from './styles';
import { Header } from '../../components/Header';

type RouteParmasProps = {
  id: string
}

export function Arrival() {
  const route = useRoute()
  const { id } = route.params as RouteParmasProps

  return (
    <Container>
      <Header title='Chegada' />
      <Content>
      <Label>
        Placa do Veículo
      </Label>
      </Content>
    </Container>
  );
}