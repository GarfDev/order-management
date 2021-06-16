import React from "react";
import { Route, Switch } from "react-router-dom";

// Internal Resources
import Orders from ".";

const Router = () => {
  // Main return
  return (
    <Switch>
      <Route path="/" component={Orders} />
    </Switch>
  );
};

export default Router;
