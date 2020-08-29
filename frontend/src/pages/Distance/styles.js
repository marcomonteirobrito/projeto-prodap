import styled from 'styled-components';

export const Container = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;


`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 700px;
  max-width: 800px;
  height: 100%;
  border-radius: 8px;

  li {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    width: 400px;
    background: var(--color-header);
    color: white;
    margin-top: 15px;
    border-radius: 8px;
  }

`;