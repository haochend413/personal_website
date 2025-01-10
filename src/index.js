import React from "react";
import ReactDOM from "react-dom/client"; // import from 'react-dom/client' for React 18+
import App from "./App.js";
import { HashRouter } from "react-router-dom";
import "./style/style.css";

// Create root element using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
