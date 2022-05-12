export type Movie = {
  title: string;
  backdrop_path: string;
  media_type?: string;
  release_date?: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  bookMarked: boolean;
};

export type certification = {
  id: number;
  results: {
    iso_3166_1: string;
    release_dates: { certification: 'string' | undefined }[];
    rating: string;
  }[];
};
