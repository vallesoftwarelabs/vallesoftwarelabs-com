// import React from "react";
import { ThemeProvider } from "styled-components";
import React from "react";
import { GlobalStyles } from "./src/styles/globalStyles";
import { theme } from "./src/styles/theme";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);