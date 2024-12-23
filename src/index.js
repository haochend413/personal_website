//where everything is connected to local browser.
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { HashRouter, BrowserRouter } from "react-router-dom";

// renders React Component "Root" into the DOM element with ID "root"

/*
Using HashRouter enables accessing subroutes directly, 
without needing to redirecting to Home. 
*/
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
