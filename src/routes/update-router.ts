import { Router } from "express";
import { updateMovie } from "../controllers";
import { validateMovie } from "../middlewares";
import { movieSchema } from "../schemas";

const updateRouter = Router();

updateRouter.put("/put", validateMovie(movieSchema), updateMovie);

export { updateRouter };