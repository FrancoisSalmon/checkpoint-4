import React from "react";
import ReactDOM from "react-dom";
import { Reset } from "styled-reset";
import { BrowserRouter } from "react-router-dom";
// eslint-disable-next-line
import { CtxProvider } from "@services/Context/Ctx";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./GlobalStyle";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CtxProvider>
      <Reset />
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ToastContainer />
    </CtxProvider>
  </React.StrictMode>
);
