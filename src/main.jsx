import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import logo from './assets/logo.PNG';

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <img src={logo} alt="Logo" />
  </React.StrictMode>
);




