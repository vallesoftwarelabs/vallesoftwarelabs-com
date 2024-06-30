// src/styles/globalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body, #___gatsby, #root, > div {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.main};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  main {
    padding: ${(props) => props.theme.spacing.padding};
  }
`;
