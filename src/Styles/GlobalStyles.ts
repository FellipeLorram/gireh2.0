import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
    --radius: 5px;
    --gray-100: #E1E1E6;
    --gray-400: #878792;
    --gray-600: #202024;
    --gray-700: #18181b;
    --gray-900: #0c0c0d;
    --main-color: #3399ff;
    --main-color-light: #66b3ff;

    --font-main-color: #878792;
    
    --font-size-s: 16px;
    --font-size-xs: 20px;
    --font-size-m: 24px;
    --font-size-l: 30px;
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
      width: var(--font-size-l) !important;
      height: var(--font-size-l)!important;
      stroke: var(--gray-400)
    }
  }

  @keyframes FadeInBackground {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.7;
    }
  }

  @keyframes NiceScale {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;
