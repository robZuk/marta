import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
     }
    
  body {
     font-family: "Open Sans", sans-serif;
     height: 100vh;
  }
`;

export default GlobalStyle;
