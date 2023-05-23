import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.View`
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Input = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  margin-top: 16px;
  text-align: center;
`;
