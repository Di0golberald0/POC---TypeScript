import { Router } from "express";
import { validateMovie } from "middlewares";
import { newMovie } from "schemas";
import { addMovie } from "../controllers";

const createRouter = Router();

createRouter.post("/post", validateMovie(newMovie), addMovie);

export { createRouter };