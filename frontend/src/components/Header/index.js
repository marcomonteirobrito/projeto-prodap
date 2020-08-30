import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalculator, FaMapMarkerAlt, FaSortAmountUpAlt } from 'react-icons/fa';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <nav>
          <Link to='/salary'>
            <span>
              <FaCalculator />
            </span>
            <strong>Calcular Salário</strong>
          </Link>
  
          <Link to='/distance'>
            <span>
              <FaMapMarkerAlt />
            </span>
            <strong>Calcular distância</strong>
          </Link>

          <Link to='/order'>
            <span>
              <FaSortAmountUpAlt />
            </span>
            <strong>Ordenar</strong>
          </Link>
      </nav>
  </Container>
  );
  
}