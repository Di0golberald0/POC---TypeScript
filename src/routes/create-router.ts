import { Router } from "express";
import { addMovie } from "../controllers";
import { validateMovie } from "../middlewares";
import { newMovie } from "../schemas";

const createRouter = Router();

createRouter.post("/post", validateMovie(newMovie), addMovie);

export { createRouter };