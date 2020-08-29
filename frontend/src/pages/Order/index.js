import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import Header from '../../components/Header';

import { Container, Main, GetAlarm, UpdateAlarm } from './styles';

export default function Alarme() {
  const [temperatureAlarm, setTemperatureAlarm] = useState([]);
  const [newTemperatureAlarm, setNewTemperatureAlarm] = useState([]);

  /*useEffect(() => {
    api.get('temperatura-alarmes')
      .then(response => {
        setTemperatureAlarm(response.data[0].newTemperatureAlarm);
      }).catch(error => {
        toast.error('Não foi possível buscar o valor definido');
      });
  }, []);*/

  async function handleInputChange(event) {
    const { value } = event.target;
    
    setNewTemperatureAlarm(value);
  }
  
  async function handleSubmit(event) {
    event.preventDefault();

    await api.put('temperatura-alarmes', {
      newTemperatureAlarm
    })
      .then(response => {
        toast.success('Nova temperatura de risco salva com sucesso!');
        setTemperatureAlarm(newTemperatureAlarm);
      }).catch(error => {
        toast.error('Não foi possível salvar sua alteração, tente novamente');
      });
  }
  
  return (
    <>
      <Header />
      <Container>
        <Main>
          <GetAlarm>
            <h1>Alerta de temperatura!</h1> 
            <span>Valor de risco: {temperatureAlarm}°</span>
          </GetAlarm>
          <UpdateAlarm>
            <label>Defina uma nova temperatura de risco</label>
              <input 
                type='number'
                name='newTemperatureAlarm'
                onChange={handleInputChange}
                maxLength='2'
              />
              <button onClick={handleSubmit}>
                Salvar
              </button>
          </UpdateAlarm>
        </Main>
      </Container>
    </>
  );
}

