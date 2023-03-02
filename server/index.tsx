import path from "path";
import dotenv from "dotenv";
import express from "express";
import { prepareTemplate } from "./prepareTemplate";
import { prepareSsr } from "./prepareSsr";

dotenv.config();
const app = express();

app
  .disable("x-powered-by")
  .use(express.static(path.resolve(__dirname, "../client")));

app.use("*", async (req: express.Request, res: express.Response) => {
  const preloadedState = await prepareSsr(req.originalUrl);
  const indexHTML = await prepareTemplate(preloadedState, req);

  res.contentType("text/html");
  res.status(200);

  return res.send(indexHTML);
});

// run express server
app.listen(process.env.APP_PORT, () => {
  console.log(
    `Express server started at http://localhost:${process.env.APP_PORT}`
  );
});
