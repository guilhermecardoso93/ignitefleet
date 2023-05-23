import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 0 32px 24px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  z-index: 1;
`;
