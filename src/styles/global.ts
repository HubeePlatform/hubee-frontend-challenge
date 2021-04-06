import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --blue: #272C59;
    --red: #e52e4d;
    --green: #33cc95;

    --text-title: #191A1C;
    --text-body: #2b2b2b;
    
    --white: #fafaf9;
    --background: #f1f1f1;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%;
    }

    @media(max-width: 720px){
      font-size: 87.5%;
    }

    @media(max-width: 640px){
      font-size: 78.5%;
    }

    //REM = 16PX

  }

  body{
    background: var(--background);
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
