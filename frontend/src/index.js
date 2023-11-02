import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import App from "./App";

// Redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReucer from "./reducers";

// Configuration du magasin Redux
const store = configureStore({
  reducer: rootReucer,
  // Propriété "devTools" : active l'extension Redux DevTools pour le débogage
  devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
