import { MoviesList } from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import React, { useState, useEffect } from 'react';
import { requestMoviesBySearch } from 'components/services/MoviesAPI';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query'); //отримуємо конкретне значення з параметру пошуку за ключовим словом
  // console.log(query);

  useEffect(() => {
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
  }, [query]);

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

export default Movies;
