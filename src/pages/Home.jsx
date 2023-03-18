import { MoviesList } from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { requestTrending } from 'components/services/MoviesAPI';

// import { useParams } from 'react-router-dom';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        const { results } = await requestTrending();
        setTrendMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {trendMovies.length > 0 && <MoviesList movies={trendMovies} />}
    </main>
  );
};

export default Home;
