import { createGlobalStyle } from 'styled-components';
import { lighten, darken } from 'polished';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  :root {
    --color-text-header: orange;
    --color-icon: red;
    --color-header: #0A122A;
    --color-content: #f9f9f9;
    --color-text: #f9f9f9;
    --color-button: orange; 
    --color-input: #c9c9c9;
    --color-background: ${lighten(0.07, '#0A122A')};
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: none;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: var(--color-background);
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

`;