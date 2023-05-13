import React from 'react';
import { Container, Greeting, Message, Name } from './styles';

export function Header() {
  return (
    <Container>
      <Greeting>
        <Message>
          Olá
        </Message>

        <Name>
          Guilherme
        </Name>
      </Greeting>
    </Container>
  );
}