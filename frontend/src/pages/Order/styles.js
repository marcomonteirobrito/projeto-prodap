import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 80%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Main = styled.div`
  background: var(--color-content);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  height: 300px;
  border-radius: 8px;

  label {
    font-size: 24px;
  }

  span {
    font-size: 18px;
  }
`;

export const GetAlarm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: red;
  width: 400px;
  height: 100px;
  margin-bottom: 30px;
  border-radius: 8px;

  span {
    font-size: 24px;
  }
`;

export const UpdateAlarm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 10px;

  input {
    border-radius: 8px;
    height: 40px;
    width: 70px;
    margin-bottom: 20px;
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
  }

  button {
    width: 70px;
    height: 30px;
    border-radius: 8px;
    color: var(--color-text-header);
    background: var(--color-header);
  }

`;


