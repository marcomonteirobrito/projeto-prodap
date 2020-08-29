import styled from 'styled-components';
import { lighten } from 'polished';


export const Container = styled.div`
  background: var(--color-header);
  height: 44px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav a {
    text-decoration: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 250px;
    margin-left: 10px;
  }

  nav a span {
    display: block;
    color: var(--color-icon);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav a strong {
    padding: 10px;
    text-align: center;
    color: var(--color-text-header);
  }

  nav a:hover {
    background: ${lighten(0.07, '#0A122A')};
  }
`;



  
