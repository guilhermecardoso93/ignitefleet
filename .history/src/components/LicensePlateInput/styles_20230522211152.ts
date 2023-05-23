import styled from 'styled-components/native';
import { Image } from 'expo-image'

export const Container = styled.View`
  width: 100%;
  padding: 16px;
  border-radius: 6px;  
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Label = styled.View`
color: ${({ theme }) => theme.COLORS.GRAY_300};
font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

`