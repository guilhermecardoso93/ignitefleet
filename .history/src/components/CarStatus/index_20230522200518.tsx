import { useTheme } from 'styled-components';
import { Container, IconBox } from './styles';
import { Key, Car } from 'phosphor-react-native'

type Props = {
  licensePlate?: string | null;
}

export function CarStatus({licensePlate = null} : Props) {
  const theme = useTheme()
  const Icon = licensePlate ? Key : Car;

  return (
    <Container>
      <IconBox>
        <Icon 
          size={32}
          color={theme.COLORS.BRAND_LIGHT}
        />
      </IconBox>
    </Container>
  );
}