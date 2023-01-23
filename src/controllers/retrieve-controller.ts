import { Request, Response } from "express";
import { getMovieList } from "../repositories/retrieve-repository";

export async function getList(_req: Request, res: Response) {
  try {
    const movies: Object[] = await getMovieList();
    return res.status(200).send(movies);
  } catch (error) {
    return res.status(500).send(error);
  }
}