export type MovieEntity = {
  name: string,
  genre: string,
  platform: string,
  status: boolean,
  rating: number,
  synopsis: string,
};

export type Movie = Omit<MovieEntity, "rating" | "synopsis">;

export type Update = Partial<MovieEntity>;