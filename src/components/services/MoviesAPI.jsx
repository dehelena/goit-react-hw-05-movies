//https://www.themoviedb.org/
// https://api.themoviedb.org/3/movie/550?api_key=c0fd7f1f5a63b2392c8262dd03548818
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const api_key = 'c0fd7f1f5a63b2392c8262dd03548818';

export const requestTrending = async () => {
  const response = await axios.get(`/trending/all/week?api_key=${api_key}`);
  return response.data;
};

export const requestMoviesBySearch = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data;
};

export const requestMovieById = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${api_key}&language=en-US`
  );
  return response.data;
};

export const requestMovieCast = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${api_key}&language=en-US`
  );
  return response.data;
};

export const requestMovieReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${api_key}&language=en-US&page=1`
  );
  return response.data;
};
