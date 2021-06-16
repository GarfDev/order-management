import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Base, Light } from "~/global/theme";

import 'antd/dist/antd.css';

// Internal Resource
import Order from "~/features/orders";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ThemeProvider theme={Light}>
          <Switch>
            <Route exact path="/" component={Order} />
          </Switch>
          <Base />
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
