import { Request, Response } from "express";
import { getMovieList } from "../repositories/retrieve-repository";
import { updateMovieStatus } from "../repositories/update-repository";

export async function updateMovie(_req: Request, res: Response) {
    const movie = _req.query;
  try {
    await updateMovieStatus(movie);
    const movies = await getMovieList();
    return res.status(200).send(movies);
  } catch (error) {
    return res.status(500).send(error);
  }
}