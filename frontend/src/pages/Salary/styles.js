import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100%;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  header {
    font-size: 32px;
    color: var(--color-text);
    margin-bottom: 15px;
  }
`;

export const NewCalcule = styled.div`
  background: var(--color-content);
  margin-bottom: 30px;
  width: 500px;
  height: 300px;
  padding: 30px;
  border-radius: 8px;
  padding: 25px;

  form {
    width: 450px;
    height: 250px;
  }

  label {
    font-size: 20px;
    margin-bottom: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    margin-bottom: 10px;
    background: var(--color-input);
    height: 30px;
    border-radius: 8px;

    &:hover{
      background: ${darken(0.08, '#c9c9c9')}
    }
  }

  button {
    margin-top: 10px;
    width: 150px;
    height: 35px;
    background: var(--color-button);
    border-radius: 8px;

    &:hover{
      background: ${lighten(0.09, 'orange')}
    }
  }
`;

export const History = styled.div`
  background: ${lighten(0.07, '#0A122A')};
  margin-bottom: 30px;
  width: 800px;
  height: 100%;
  padding: 15px 50px;;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  header {
    font-size: 32px;
    margin-bottom: 15px;
  }
  label {
    font-size: 20px;
  }

  li {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    width: 700px;
    background: var(--color-content);
    border-radius: 8px;
    margin-bottom: 15px;

    &:hover{
      background: ${darken(0.09, '#f9f9f9')}
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin-right: 24px;
  }
`;

