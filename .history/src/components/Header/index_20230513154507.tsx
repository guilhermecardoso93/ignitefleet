import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Power } from 'phosphor-react-native'

import theme from '../../theme';

import { Container, Greeting, Message, Name, Picture } from './styles';
import { useUser } from '@realm/react';

export function Header() {
  const user = useUser()
  return (
    <Container>
       <Picture 
        source={{ uri: user?.profile.pictureUrl }}
        placeholder='L184i9ofbHof00ayjsay~qj[ayj@'
      />
      <Greeting>
        <Message>
          Olá
        </Message>

        <Name>
          {user?.profile.firstName}
        </Name>
      </Greeting>
      <TouchableOpacity>
        <Power size={32} color={theme.COLORS.GRAY_400}/>
      </TouchableOpacity>
    </Container>
  );
}