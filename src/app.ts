import cors from "cors";
import express from "express";
import { createRouter, deleteRouter, retrieveRouter, updateRouter } from "./routes";

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use(retrieveRouter)
  .use(createRouter)
  .use(updateRouter)
  .use(deleteRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});