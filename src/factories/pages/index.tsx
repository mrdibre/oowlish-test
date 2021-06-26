import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { makeLoginPageFactory } from "./login/make-login-page-factory";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/login">
        {makeLoginPageFactory()}
      </Route>
    </Switch>
  </Router>
);

export default App;
