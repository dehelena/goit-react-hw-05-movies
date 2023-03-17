import { MoviesList } from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { requestTrending } from 'components/services/MoviesAPI';

// import { useParams } from 'react-router-dom';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        const { results } = await requestTrending();
        // console.log(results);
        setTrendMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendMovies();
  }, []);

  return (
    <main>
      <h1>Trending movies for this week</h1>
      {trendMovies.length > 0 && <MoviesList movies={trendMovies} />}
    </main>
  );
};
