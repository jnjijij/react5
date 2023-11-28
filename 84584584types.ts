// types.ts

export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  genre_ids: number[];
}

export interface IGenre {
  id: number;
  name: string;
}
