import { Router } from "express";
import { getList } from "../controllers";

const retrieveRouter = Router();

retrieveRouter.get("/", getList);

export { retrieveRouter };