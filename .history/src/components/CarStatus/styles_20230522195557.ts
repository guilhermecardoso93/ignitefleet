import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 22px;
  margin: 32px 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
