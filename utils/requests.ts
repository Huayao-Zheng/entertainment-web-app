const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchTVs: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US`,
  fetchMoviesByName: `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`,
  fetchTVsByName: `${BASE_URL}/search/tv?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`,
};

export default requests;
