//https://www.themoviedb.org/
// https://api.themoviedb.org/3/movie/550?api_key=c0fd7f1f5a63b2392c8262dd03548818

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const api_key = 'c0fd7f1f5a63b2392c8262dd03548818';

const fetchTrending = async () => {
  const response = await axios.get(`/trending/all/day?api_key=${api_key}`);
  return response.data;
};

const fetchMoviesBySearch = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data;
};

const fetchMovieDetails = async () => {
  const response = await axios.get(
    `/movie/{movie_id}?api_key=${api_key}&language=en-US`
  );
  return response.data;
};

const fetchMovieCast = async () => {
  const response = await axios.get(
    `/movie/{movie_id}/credits?api_key=${api_key}&language=en-US`
  );
  return response.data;
};

export default 