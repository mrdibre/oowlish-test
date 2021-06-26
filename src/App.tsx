import React from "react";
import { ThemeProvider } from "styled-components";
import { Button, MuiThemeProvider } from "@material-ui/core";

import { theme } from "ui/theme";
import { GlobalStyle } from "ui/style/globalStyle";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MuiThemeProvider theme={theme}>
      <Button color="primary" variant="contained">
        Teste
      </Button>
    </MuiThemeProvider>
  </ThemeProvider>
);

export default App;
