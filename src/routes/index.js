import React from "react";
import { Route, Switch } from "react-router-dom";
import IndexPage from "../pages";
import Desks from "../pages/desks/index";

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact>
        <IndexPage />
      </Route>
      <Route path="/desks">
        <Desks />
      </Route>
    </Switch>
  );
}
