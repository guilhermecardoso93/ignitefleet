import styled from 'styled-components/native';
import { Image } from 'expo-image'

export const Container = styled.View`
  width: 100%;
  padding: 16px;
  border-radius: 6px;  
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;