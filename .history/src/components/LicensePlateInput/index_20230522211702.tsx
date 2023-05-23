import React from 'react';
import { Container, Input, Label } from './styles';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

type Props = TextInputProps & {
  label: string,
}

export function LicensePlateInput({ label }: Props) {
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