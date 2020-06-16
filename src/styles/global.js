import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Roboto:wght@400;700&display=swap');

  :root {
    --p-color: #F04E7F;
    --s-color: #373435;
    --t-color: #4BB7EB;
    --f-color: #707070;
    --background-color: #F0F0F0;
    --max-width: 1200px;
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
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: var(--background-color);
  }

  body, input, button {
    font: 14px 'Roboto', 'Nunito', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
