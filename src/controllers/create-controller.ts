import { Request, Response } from "express";
import { Movie, MovieEntity } from "../protocols";
import { addNewMovie } from "../repositories/create-repository";
import { getMovieList } from "../repositories/retrieve-repository";

export async function addMovie(_req: Request, res: Response) {
    const movie = _req.body as Movie;
  try {
    await addNewMovie(movie);
    const movies: Partial<MovieEntity> = await getMovieList();
    return res.status(200).send(movies);
  } catch (error) {
    return res.status(500).send(error);
  }
}