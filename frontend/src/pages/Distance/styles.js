import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Main = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 700px;
  max-width: 800px;
  border-radius: 8px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.div`
  width: 600px;
  height: 250px;
  background: var(--color-content);
  border-radius: 8px;


  label {
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    width: 100px;
    height: 30px;
    margin-bottom: 20px;
    border-radius: 8px;
    text-align: center;
    background: var(--color-input);

    &:hover{
      background: ${darken(0.09, '#f9f9f9')}
    }
  }

  button {
    width: 150px;
    height: 40px;
    background: var(--color-button);
    border-radius: 8px;
    margin-bottom: 15px;

    &:hover{
      background: ${lighten(0.09, 'orange')}
    }
  }

`;
export const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100px;
  margin-top: 10px;
  margin-bottom: 15px;
  background: var(--color-content);
  border-radius: 8px;

  label {
    font-size: 24px;
  }

  span {
    padding: 10px;
  }
`;
