import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';
import { FaTrash } from 'react-icons/fa';

import { formatPrice } from '../../util/format';
import api from '../../services/api';
import Header from '../../components/Header';

import { Container, NewCalcule, History } from './styles';

export default function Salary() {
  const [historySalary, setHistorySalary] = useState([]);
  const [deleted, setDeleted] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    fixed_salary: '',
    total_sale: ''
  });

  useEffect(() => {
    api.get('salary')
      .then(response => {
        const data = response.data.map(history => ({
          ...history,
          totalSaleFormatted: formatPrice(history.total_sale),
          salaryFixedFormatted: formatPrice(history.fixed_salary),
          totalSalaryFormatted: formatPrice(history.total_salary),
        }));
        setHistorySalary(data);
      });
  }, [formData, deleted]);

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
          fixedSalary: '',
          totalSale: ''
        })
      }).catch(error => {
        toast.error(`${error.response.data.error}`);
      });
  }

  async function handleDelete(id) {
    await api.delete(`salary/${id}`)
      .then(response => {
        toast.success('Deletado com sucesso');
        setDeleted(id);
      }).catch(error => {
        toast.error('Não foi possível executar a ação, tente novamente')
      });
  }

  return (
    <>
      <Header />
      <Container>
        <header>Realizar novo calculo</header>
        <NewCalcule>
          <form onSubmit={handleSubmit}>
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
                type='text'
                name='totalSale'
                value={formData.totalSale}
                onChange={handleInputChange}
              />
            </div>


            <div>
              <label>Salário fixo</label>
              <input
                type='text'
                name='fixedSalary'
                value={formData.fixedSalary}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <button>Calcular</button>
            </div>
          </form>
        </NewCalcule>


        <header>Historico de calculos</header>
        <History>
          {historySalary.map(history => (
            <li key={history.id}>
              <div className='name'>
                <label>Nome</label>
                <span>{history.name}</span>
              </div>

              <div className='salary'>
                <label>Salário</label>
                <span>{history.salaryFixedFormatted}</span>
              </div>

              <div className='sale'>
                <label>Vendas</label>
                <span>{history.totalSaleFormatted}</span>
              </div>

              <div className='commission'>
                <label>Comissao</label>
                <span>15%</span>
              </div>

              <div className='total'>
                <label>Total</label>
                <span>{history.totalSalaryFormatted}</span>
              </div>


              <div className='creatAt'>
                <label>Realizado em</label>
                <span>{moment(history.createdAt).format('DD/MM/YYYY')}</span>
              </div>

              <span onClick={() => handleDelete(history.id)}>
                <FaTrash size={20} color={'red'} />
              </span>
            </li>
          ))}
        </History>
      </Container>
    </>
  );
}

