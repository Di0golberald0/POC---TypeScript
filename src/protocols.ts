export type Movie = {
  name: string,
  genre: string,
  platform: string,
  status: boolean,
  rating: number,
  synopsis: string,
};

export type Update = Partial<Movie>;