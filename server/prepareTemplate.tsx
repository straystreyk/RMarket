import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import { initStore, StoreStateType } from "../src/store/store";
import { App } from "../src/components/app";
import { Request } from "express";
import { Helmet } from "react-helmet";

export const prepareTemplate = async (
  preloadedState: StoreStateType,
  req: Request
) => {
  const helmet = Helmet.renderStatic();
  const title = helmet.title.toString();
  const meta = helmet.meta.toString();

  const indexHTML = fs.readFileSync(
    path.resolve(__dirname, "../client/start-page.html"),
    {
      encoding: "utf8",
    }
  );

  const appHTML = ReactDOMServer.renderToString(
    <StaticRouter location={req.originalUrl}>
      <Provider store={initStore(preloadedState)}>
        <App />
      </Provider>
    </StaticRouter>
  );

  return indexHTML
    .replace(
      '<div id="app"></div>',
      `
      <div id="app">${appHTML}</div> 
      <script type="text/javascript">
      window._SSR_STORE_STATE_ = 
      ${JSON.stringify(initStore(preloadedState).getState())};
      </script>
    `
    )
    .replace("<title>__META_TITLE__</title>", meta + "\n" + title);
};
