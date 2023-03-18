import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
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
      </ul>
    </div>
  );
};
