import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  // css 초기값 정의
  ${reset}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
  }

  html, body {
    font-family: sans-serif;
    height: 100%;
    background-color: ${({ theme }) => theme.mode.mainBackground};
  }

  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
  }
  
  .chakra-portal {
    background-color: ${({ theme }) => theme.mode.mainBackground};
  }

`;

export default GlobalStyles;
