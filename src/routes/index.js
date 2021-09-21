import React from "react";
import { Route, Switch } from "react-router-dom";

import IndexPage from "../pages";
import BidsIndex from "../pages/bids";
import Desks from "../pages/desks/index";
import Informatives from "../pages/informatives";
import NewsIndex from "../pages/news";
import Publications from "../pages/publications";
import Schedule from "../pages/schedule";
import SecretaryIndex from "../pages/secretary";

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
      <Route path="/bids">
        <BidsIndex />
      </Route>
      <Route path="/secretary">
        <SecretaryIndex />
      </Route>
      <Route path="/schedule">
        <Schedule />
      </Route>
      <Route path="/news">
        <NewsIndex />
      </Route>
    </Switch>
  );
}
