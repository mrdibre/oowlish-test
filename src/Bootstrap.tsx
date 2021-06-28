import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import { theme } from "config/ui/theme";
import { registerFirebase } from "config/firebase";
import { GlobalStyle } from "config/ui/style/globalStyle";

import App from "./main/factories/pages";

registerFirebase();

const Bootstrap = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <App />
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  </ThemeProvider>
);

export default Bootstrap;
