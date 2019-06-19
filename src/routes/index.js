import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Register from "../components/Register";
import FindClient from "../components/FindClient";
import Create from "../components/CreateEvaluation";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/register" component={Register} />
          <Route exact path="/find" component={FindClient} />
          <Route exact path="/create" component={Create} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;