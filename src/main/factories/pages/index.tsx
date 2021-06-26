import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { makeLoginPageFactory } from "./login/make-login-page-factory";
import { makeMainPageFactory } from "./main/make-main-page-factory";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        {makeMainPageFactory()}
      </Route>
      <Route exact path="/login">
        {makeLoginPageFactory()}
      </Route>
    </Switch>
  </Router>
);

export default App;
