import { Request, Response } from "express";
import { removeMovie } from "../repositories/delete-repository";
import { getMovieList } from "../repositories/retrieve-repository";

export async function deleteMovie(_req: Request, res: Response) {
    const movie:string = _req.body;
  try {
    await removeMovie(movie);
    const movies: Object[] = await getMovieList();
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).send(error);
  }
}