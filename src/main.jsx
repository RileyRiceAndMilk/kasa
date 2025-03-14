import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const logo = '/assets/logo.PNG'; 

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* Affichage de l'image logo dans index.jsx */}
    <img src={logo} alt="Logo" />
  </React.StrictMode>
);



