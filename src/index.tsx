import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./components/app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { initStore } from "./store/store";
import { STORE } from "./helpers/constants";

import "./index.module.scss";

const container = document.getElementById("app") as HTMLElement;

const root = ReactDOM.hydrateRoot(
  container,
  <BrowserRouter>
    <Provider store={initStore(STORE)}>
      <App />
    </Provider>
  </BrowserRouter>
);
