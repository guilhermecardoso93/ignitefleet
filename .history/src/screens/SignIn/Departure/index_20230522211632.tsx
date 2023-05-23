import React from 'react';
import { Container } from './styles';
import { Header } from '../../../components/Header';
import { LicensePlateInput } from '../../../components/LicensePlateInput';

export function Departure() {
  return (
    <Container>
      <Header title='Saída'/>
      <LicensePlateInput 
        label='Placa do Veículo'
        input='BRA1234'
      />
    </Container>
  );
}