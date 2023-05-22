import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'pokemon-solid';
    src: url('https://fonts.cdnfonts.com/css/pokemon-solid');
  }

  body {
    font-family: "pokemon-solid", verdana;
  }
`;
