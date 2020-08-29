import React, { useEffect, useState } from 'react';
import moment from 'moment';

import api from '../../services/api';
import Header from '../../components/Header';

import { Container, Main } from './styles';

export default function Distance() {
  const [historico, setHistorico] = useState([]);

  /*useEffect(() => {
    api.get('temperatura-historico')
      .then(response => {
        setHistorico(response.data);
      });
  }, []);*/

  return (
    <>
      <Header />
      <Container>
        <Main> 
          
            <li >
              <div>
                <strong>Temperatura C°</strong>
                <p></p>
              </div>

              <div>
                <strong>Status</strong>
                <p></p>
              </div>

              <div>
                <strong>Data</strong>
                <p></p>
              </div>
            </li>
          
        </Main>
      </Container>
    </>
  );
}
