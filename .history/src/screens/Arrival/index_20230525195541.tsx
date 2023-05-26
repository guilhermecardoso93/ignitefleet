import React from 'react';
import { Container } from './styles';
import { useRoute } from '@react-navigation/native';

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