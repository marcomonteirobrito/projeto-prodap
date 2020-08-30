import React from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

export default function Inicio() {
  return (
    <>
      <Header />
      <Container>
        <h1>Desafio Programador fullstack Prodap</h1>
        <p>Cada questão do desafio está em uma página no cabeçalho</p>
      </Container>
    </>
  );
}

