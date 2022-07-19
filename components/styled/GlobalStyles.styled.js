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
    background-color: ${(props) => props.theme.colors.background};
    transition: all .2s ease;
  }
`;

export default GlobalStyle