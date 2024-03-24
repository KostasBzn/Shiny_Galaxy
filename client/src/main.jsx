import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GalaxyContextProvider from "./context/galaxyContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GalaxyContextProvider>
        <App />
      </GalaxyContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
