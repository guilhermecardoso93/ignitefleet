import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Power } from 'phosphor-react-native'

import theme from '../../theme';

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
      <TouchableOpacity>
        <Power size={32} color={theme.COLORS.GRAY_400}/>
      </TouchableOpacity>
    </Container>
  );
}