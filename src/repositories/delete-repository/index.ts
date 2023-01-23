import { connection } from "../../../database/database";

export async function removeMovie(movieName: string) {
    await connection.query(
        `DELETE * FROM movies WHERE name=$1;`,
        [movieName]
    );
}