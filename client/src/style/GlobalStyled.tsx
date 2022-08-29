import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import SideMenu from '../components/blocks/SideMenu';

const GlobalStyles = createGlobalStyle`
  // css 초기값 정의
  ${reset}

  ;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding-top: 64px;
    background-color: ${({ theme }) => theme.mode.mainBackground};
    border: 1px solid transparent;
    transition: 0.3s;
    height: 100%;
  }

  html, body {
    font-family: sans-serif;
    height: 100%;
  }

  #root {
    height: 100%;
  }
  

  
`;

export default GlobalStyles;
