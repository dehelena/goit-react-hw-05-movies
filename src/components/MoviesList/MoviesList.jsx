import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MovieListStyled } from './MoviesListStyled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <MovieListStyled>
        {movies !== null &&
          movies.map(({ id, title, name }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title || name}
                </Link>
              </li>
            );
          })}
      </MovieListStyled>
    </>
  );
};
