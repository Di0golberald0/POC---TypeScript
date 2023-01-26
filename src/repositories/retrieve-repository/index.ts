import { connection } from "../../database";

export async function getMovieList() {
  const { rows } = await connection.query("SELECT * FROM movies");
  return rows;
}