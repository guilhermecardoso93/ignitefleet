import { TouchableOpacity } from 'react-native';
import { Container, Title } from './styles';
import { ArrowLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components';

type Props {
  
}

export function Header({} : Props) {
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