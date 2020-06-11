import React from "react";
import { render } from "react-dom";

import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept(App);
}
