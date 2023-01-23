CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
	"platform" TEXT NOT NULL,
	"status" BOOLEAN NOT NULL DEFAULT FALSE,
    "rating" INTEGER NOT NULL,
    "synopsis" TEXT NOT NULL
);