import { Request, Response } from "express";
import { Movie, MovieEntity } from "protocols";
import { getMovieList } from "repositories/retrieve-repository";
import { removeMovie } from "../repositories/delete-repository";

export async function deleteMovie(_req: Request, res: Response) {
    const movie:string = _req.body;
  try {
    await removeMovie(movie);
    const movies: Partial<MovieEntity> = await getMovieList();
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).send(error);
  }
}