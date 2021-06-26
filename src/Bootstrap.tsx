import React from "react";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import { theme } from "ui/theme";
import { GlobalStyle } from "ui/style/globalStyle";

import App from "./main/factories/pages";

const Bootstrap = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </ThemeProvider>
);

export default Bootstrap;
