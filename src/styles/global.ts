import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font: 400 1rem 'Open Sans', sans-serif;
  }

  button{
    cursor: pointer;
  }

  ul{
    list-style: none;
  }

  @media(max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }

@media(max-width: 720px){
  html{
    font-size: 87.5%;
  }
}

`;
