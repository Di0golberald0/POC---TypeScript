import { connection } from "../../../database/database";
import { Movie } from "../../protocols";

export async function addNewMovie(newMovie: Movie) {
    await connection.query(
        `
        INSERT INTO movies (
            name,
            genre,
            platform,
            status
        ) VALUES ($1, $2, $3, $4);
        `,
        [newMovie.name, newMovie.genre, newMovie.platform, newMovie.status]
    );
}