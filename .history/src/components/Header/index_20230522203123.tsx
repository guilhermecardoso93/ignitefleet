import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { ArrowLeft } from 'phosphor-react-native';

import { Container, Title } from './styles';

export function Header() {
  const {COLORS } = useTheme()
  
  
  return (
    <Container >
      <TouchableOpacity>
        <ArrowLeft 
          size={24}
          weight='bold'
          color={COLORS.BRAND_LIGHT}
        />
      </TouchableOpacity>
      <Title>

      </Title>
    </Container>
  );
}