// src/styles/globalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  html, body, #___gatsby, #root, > div {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.main};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    animation: fadeIn 1s ease-in;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  main {
    padding: ${(props) => props.theme.spacing.padding};
  }
`;
