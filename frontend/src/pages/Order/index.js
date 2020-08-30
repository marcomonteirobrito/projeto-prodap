import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Header from '../../components/Header';

import { Container, Input, Content } from './styles';

export default function Order() {
  const [inputValue, setInputValue] = useState('');
  const [pares, setPares] = useState([]);
  const [impares, setImpares] = useState([]);
  const [contador, setContador] = useState(0);


  async function handleSubmit(event) {
    event.preventDefault();

    if (inputValue > 0 && contador < 10) {
      const count = contador + 1;
      setContador(count);

      if ((inputValue % 2) === 0) {
        const orderPar = [...pares, inputValue];
        orderPar.sort((a, b) => { return a - b })
        setPares(orderPar);
        setInputValue('');
      } else {
        const orderImpar = [...impares, inputValue];
        orderImpar.sort((a, b) => { return b - a })
        setImpares(orderImpar);
        setInputValue('');
      }
    } else {
      toast.error('Somente valores positivos e no máximo 10 valores, limpe para inserir novamente');
    }
  }

  async function handleInputChange(event) {
    event.preventDefault();
    setInputValue(event.target.value);
  }

  async function handleClean() {
    setImpares([]);
    setPares([]);
  }

  return (
    <>
      <Header />
      <Container>
        <Input>
          <form onSubmit={handleSubmit}>
            <label>Informe o valor e clique em inserir</label>
            <input
              type='number'
              value={inputValue}
              onChange={handleInputChange}
            />
            <button type='submit'>Inserir</button>
          </form>
        </Input>

        <Content>
          <button onClick={handleClean}>Limpar</button>
          <ul>
            {pares.map(par => (
              <li>
                {par}
              </li>
            ))}
          </ul>
          <ul>
            {impares.map(impar => (
              <li>
                {impar}
              </li>
            ))}
          </ul>

        </Content>
      </Container>
    </>
  );
}

