import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray-1000: #000000;
    --gray-900: #13171B;
    --gray-800: #20262B;
    --gray-500: #838C95;
    --gray-450: #738291;
    --gray-300: #A1A3A5;
    --gray-100: #E6E6E6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-900);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
  }

  [disabled] {
    cursor: not-allowed;
  }
  
`;
