import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 80%;
  align-items: center;
  justify-content: center;
`;


export const Input = styled.div`
  display: flex;
  background: var(--color-content);
  margin-right: 100px;
  border-radius: 8px;
  width: 400px;
  font-size: 24px;

  form {
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 180px;
    align-items: center;
    justify-content: space-between;

  }

  input {
    width: 100px;
    height: 50px;
    text-align: center;
    border-radius: 8px;
    background: var(--color-input);
  }

  button {
    width: 100px;
    height: 35px;
    background: var(--color-button);
    border-radius: 8px;

    &:hover{
      background: ${lighten(0.09, 'orange')}
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-content);
  width: 100px;
  text-align: center;
  border-radius: 8px;
  height: 300px;
  padding: 15px;
  
  li {
    list-style-type: none;
  }

  button {
    width: 70px;
    height: 25px;
    background: var(--color-button);
    border-radius: 8px;
    margin-bottom: 15px;

    &:hover{
      background: ${lighten(0.09, 'orange')}
    }
  }
`;