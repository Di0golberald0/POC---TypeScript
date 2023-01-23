import { Request, Response } from "express";
import { addNewMovie } from "../repositories/create-repository";

export async function addMovie(_req: Request, res: Response) {
    const movie = _req.query;
  try {
    const movies = await addNewMovie(movie);
    return res.status(200).send(movies);
  } catch (error) {
    return res.status(500).send(error);
  }
}