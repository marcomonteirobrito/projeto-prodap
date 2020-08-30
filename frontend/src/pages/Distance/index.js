import React, { useState } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import Header from '../../components/Header';

import { Container, Main, Input, Result } from './styles';

export default function Distance() {
  const [distance, setDistance] = useState([]);
  const [formData, setFormData] = useState({
    spot1: '',
    spot2: '',
  });

  async function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await api.post('distance', formData)
      .then(response => {
        toast.success('Distância calculada com sucesso');
        setFormData({
          spot1: '',
          spot2: '',
        });
        setDistance(response.data.distance.toFixed(4));
      }).catch(error => {
        toast.error(`${error.response.data.error}`);
      });
  }

  return (
    <>
      <Header />
      <Container>
        <Main>
          <Input>
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <label>Insira os valores de x1 e y1</label>
                </div>

                <div>
                  <input
                    type='text'
                    name='spot1'
                    value={formData.spot1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <div>
                  <label>Insira os valores de x2 e y2</label>
                </div>

                <div>
                  <input
                    type='text'
                    name='spot2'
                    value={formData.spot2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button type='submit'>Calcular</button>
            </form>
          </Input>

          <Result>
            <label>Distância calculada</label>
            <span>{distance}</span>
          </Result>
        </Main>
      </Container>
    </>
  );
}
