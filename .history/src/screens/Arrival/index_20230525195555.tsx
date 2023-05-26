import { useRoute } from '@react-navigation/native';

import { Container } from './styles';

type RouteParmasProps = {
  id: string
}

export function Arrival() {
  const route = useRoute()
  const { id } = route.params as RouteParmasProps

  return (
    <Container>

    </Container>
  );
}