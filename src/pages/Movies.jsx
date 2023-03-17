import { MoviesList } from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import React, { useState, useEffect } from 'react';
import { requestMoviesBySearch } from 'components/services/MoviesAPI';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    // console.log('query: ', query);
    if (!query) return;
    const fetchSearchedMovies = async query => {
      try {
        const { results } = await requestMoviesBySearch(query);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSearchedMovies(query);
  }, [searchParams]);

  const handleSearchbarSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchbarSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};
