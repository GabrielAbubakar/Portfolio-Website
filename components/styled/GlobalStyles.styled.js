import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all .2s ease;
  }

  body {
    color: ${(props) => props.theme.colors.bodyText};
    background-color: ${(props) => props.theme.colors.background};
    overflow: hidden;
  }
`;

export default GlobalStyle