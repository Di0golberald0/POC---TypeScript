import { Router } from "express";
import { deleteMovie } from "../controllers";

const deleteRouter = Router();

deleteRouter.delete("/delete", deleteMovie);

export { deleteRouter };