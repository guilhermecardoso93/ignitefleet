import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false }: ButtonProps) {
  return (
    <Container activeOpacity={0.7} disabled={isLoading}>
      {title}
    </Container>
  );
}
