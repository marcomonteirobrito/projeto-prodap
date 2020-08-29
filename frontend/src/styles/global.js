import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  :root {
    --color-text-header: orange;
    --color-icon: red;
    --color-header: #0A122A;
    --color-background: #ddd8d8;
    --color-content: #c9c9c9;
    --color-button: #0A122A;  
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
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