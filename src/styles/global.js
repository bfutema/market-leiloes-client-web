import { createGlobalStyle } from 'styled-components';

import 'react-circular-progressbar/dist/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  :root {
    --p-color: #F04E7F;
    --s-color: #373435;
    --t-color: #4BB7EB;
    --f-color: #707070;
    --purple-color: #7159C1;
    --background-color: #F0F0F0;
    --max-width: 1440px;
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
    display: flex;
    flex-direction: column;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: var(--background-color);
  }

  body, input, button {
    font: 14px 'Nunito', 'Roboto', sans-serif;
  }

  input[type="date"], select {
    height: 37px;
  }

  a {
    text-decoration: none !important;
  }

  ul {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  fieldset {
    border: none !important;
  }
`;
