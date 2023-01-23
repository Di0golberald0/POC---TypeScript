import { Request, Response } from "express";
import { removeMovie } from "../repositories/delete-repository";

export async function deleteMovie(_req: Request, res: Response) {
    const movie = _req.params;
  try {
    await removeMovie(movie);
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).send(error);
  }
}