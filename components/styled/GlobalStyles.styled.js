import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

  body {
    background-color: ${(props) => props.theme.colors.background};
    transition: all .2s ease;
  }
`;

export default GlobalStyle