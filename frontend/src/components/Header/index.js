import React from 'react';
import { Link } from 'react-router-dom';
import { FiThermometer } from 'react-icons/fi';
import { MdAlarm, MdHistory } from 'react-icons/md';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <nav>
          <Link to='/salary'>
            <span>
              <FiThermometer />
            </span>
            <strong>Calcular Salário</strong>
          </Link>
  
          <Link to='/distance'>
            <span>
              <MdHistory />
            </span>
            <strong>Calcular distância</strong>
          </Link>

          <Link to='/order'>
            <span>
              <MdAlarm />
            </span>
            <strong>Ordenar</strong>
          </Link>
      </nav>
  </Container>
  );
  
}