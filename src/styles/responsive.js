import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @media screen and (min-width: 1440px) {
    .main-container {
      max-width: var(--max-width);
    }
  }
`;
