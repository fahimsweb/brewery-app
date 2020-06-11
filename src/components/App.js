import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "../store";
import LandingPage from "../containers/LandingPage";

export default () => (
  <Provider store={store}>
    <LandingPage />
  </Provider>
);
