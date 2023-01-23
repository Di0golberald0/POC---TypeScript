import { Router } from "express";
import { validateMovie } from "middlewares";
import { movieUpdate } from "schemas";
import { updateMovie } from "controllers";

const updateRouter = Router();

updateRouter.put("/put", validateMovie(movieUpdate), updateMovie);

export { updateRouter };