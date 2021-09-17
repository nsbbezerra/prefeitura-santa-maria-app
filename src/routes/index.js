import React from "react";
import { Route, Switch } from "react-router-dom";

import IndexPage from "../pages";
import Desks from "../pages/desks/index";
import Informatives from "../pages/informatives";
import Publications from "../pages/publications";

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact>
        <IndexPage />
      </Route>
      <Route path="/desks">
        <Desks />
      </Route>
      <Route path="/informatives">
        <Informatives />
      </Route>
      <Route path="/publications">
        <Publications />
      </Route>
    </Switch>
  );
}
