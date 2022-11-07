import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
    --radius: 5px;
    --gray-100: #E1E1E6;
    --gray-400: #878792;
    --gray-600: #202024;
    --gray-700: #121214;
    --main-color: #3399ff;
    --main-color-light: #66b3ff;

    --font-main-color: #878792;
    
    --font-size-s: 12px;
    --font-size-m: 16px;
    --font-size-l: 20px;
  }
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
  html {
    height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  body {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    background: var(--gray-600);
    height: 100vh;

    svg {
      stroke: var(--gray-400)
    }
  }
`;
