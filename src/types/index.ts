export interface Movie {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: string[];
  id: number;
  name?: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  original_title: string;
  title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}
