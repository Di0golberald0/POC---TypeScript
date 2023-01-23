import { Router } from "express";
import { addMovie } from "../controllers";
import { validateMovie } from "../middlewares";
import { movieSchema } from "../schemas";

const createRouter = Router();

createRouter.post("/post", validateMovie(movieSchema), addMovie);

export { createRouter };