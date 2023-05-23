import React from 'react';
import { Container, Input, Label } from './styles';
import { useTheme } from 'styled-components';

type Props = {
  label: string,
  input: string,
}

export function LicensePlateInput({ label, input }: Props) {
  const { COLORS } = useTheme()

  return (
    <Container>
      <Label>
        {label}
      </Label>
      <Input
        maxLength={7}
        autoCapitalize='characters'
        placeholderTextColor={COLORS.GRAY_400}
      />
    </Container>
  );
}