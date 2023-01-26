import { connection } from "../../database";
import { Update } from "../../protocols";

export async function updateMovieStatus(movieUpdate: Update) {
    await connection.query(
        `INSERT INTO movies (
            rating,
            synopsis
        ) 
        VALUES ($1, $2)
        WHERE name=$3;
        `,
        [movieUpdate.rating, movieUpdate.synopsis, movieUpdate.name]
    );
}