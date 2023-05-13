import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Power } from 'phosphor-react-native'

import theme from '../../theme';

import { Container, Greeting, Message, Name, Picture } from './styles';

export function Header() {
  return (
    <Container>
       <Picture 
        source={{ uri: 'https://github.com/rennand.png' }}
        placeholder='L184i9ofbHof00ayjsay~qj[ayj@'
      />
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