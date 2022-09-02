<<<<<<< HEAD
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
=======
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
>>>>>>> dev

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
    background-color: ${({ theme }) => theme.mode.mainBackground};
  }

  html, body {
    font-family: sans-serif;
    height: 100%;
  }
<<<<<<< HEAD

=======
  
>>>>>>> dev
  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
  }
<<<<<<< HEAD

=======
  
>>>>>>> dev
`;

export default GlobalStyles;
