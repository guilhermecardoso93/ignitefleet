import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import { ArrowLeft } from "phosphor-react-native";

import { Container, Title } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Header() {
  const { COLORS } = useTheme();
  const insets = useSafeAreaInsets();

  const paddingTop = insets.top + 42;

  return (
    <Container style={{ paddingTop }}>
      <TouchableOpacity activeOpacity={0.7}>
        <ArrowLeft size={24} weight="bold" color={COLORS.BRAND_LIGHT} />
      </TouchableOpacity>
      <Title></Title>
    </Container>
  );
}
