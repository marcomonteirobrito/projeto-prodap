import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


export const NewCalcule = styled.div`
  background: #f9f9f9;
  margin-bottom: 30px;
  width: 500px;
  height: 300px;
  padding: 30px;
  border-radius: 8px;

  header {
    font-size: 32px;
    margin-bottom: 15px;
  }

  form {
    display: flex;
    justify-content: space-between;
  }

  label {
    font-size: 20px;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  input {
    border-radius: 8px;
    width: 200px;
    height: 32px;
    margin-bottom: 15px;
  }

  button {
    font-size: 24px;
    background: #999;
    text-align: center;
    border-radius: 8px;
    height: 32px;
  }


`;

export const History = styled.div`
  background: #f9f9f9;
  margin-bottom: 30px;
  width: 690px;
  height: 300px;
  padding: 30px;
  border-radius: 8px;

  header {
    font-size: 32px;
    margin-bottom: 15px;
  }
`;

export const Content = styled.div`
  label {
    font-size: 20px;
  }

  li {
    display: flex;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-right: 24px;
  }

`;
