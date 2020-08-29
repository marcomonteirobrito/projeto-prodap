import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';

import api from '../../services/api';
import Header from '../../components/Header';

import { Container, NewCalcule, History, Content  } from './styles';

export default function Salary() {
  const [historySalary, setHistorySalary] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    fixed_salary: '',
    total_sale: '',
    commission: ''
  });

  useEffect(() => {
    api.get('salary')
      .then(response => {

        setHistorySalary(response.data);
      });
  }, [formData]);

  async function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    
    await api.post('salary', formData)
      .then(response => {
        toast.success('Salário calculado com sucesso');
        setFormData({
          name: '',
          fixed_salary: '',
          total_sale: '',
          commission: ''
        })
      }).catch(error => {
        toast.error('Falha no calculo, tente novamente');
      });
  }

  return (
    <>
      <Header />
      <Container>
          <NewCalcule>
            <div>
              <header>Realizar novo calculo</header>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div>
                <div> 
                  <label>Nome</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange} 
                  />
                </div>
                
                <div>
                  <label>Total em vendas</label>
                  <input
                    type='number'
                    name='total_sale'
                    value={formData.total_sale}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <div>
                  <label>Salário fixo</label>
                  <input
                    type='number'
                    name='fixed_salary'
                    value={formData.fixed_salary}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label>Comissão em %</label>
                  <input 
                    type='number'
                    name='commission'
                    value={formData.commission}
                    onChange={handleInputChange}
                  />
                </div>

                <button type='submit'>Calcular</button>
              </div>
            </form>
          </NewCalcule>

          <History>
            <div>
              <header>Historico de calculos</header>
            </div>

            <Content>
              {historySalary.map(history => (
                <li key={history.id}>
                <div>
                  <label>Nome</label>
                  <span>{history.name}</span>
                </div>

                <div>
                  <label>Salário</label>
                  <span>R${history.fixed_salary}</span>
                </div>

                <div>
                  <label>Vendas</label>
                  <span>{history.total_sale}</span>
                </div>

                <div>
                  <label>Comissao</label>
                  <span>15%</span>
                </div>

                <div>
                  <label>Total</label>
                  <span>{history.total_salary}</span>
                </div>
             

                <div>
                  <label>Realizado em</label>
                  <span>{moment(history.createdAt).format('DD/MM/YYYY')}</span>
                </div>
                </li>
              ))}
              
            </Content>
          </History>
      </Container>
    </>
  );
}

