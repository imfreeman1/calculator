import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
  body{
    background: linear-gradient(to bottom right, #ff5f6d,#C09BD8)
  }
`;

export { GlobalStyle };
