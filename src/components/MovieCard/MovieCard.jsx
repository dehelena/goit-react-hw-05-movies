import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
  const { title, poster_path, genres, release_date, overview, vote_average } =
    movie;
  const defaultImg =
    'https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg?ver=6';

  return (
    <>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : defaultImg
          }
          alt={title}
        />
        <h2>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <span>User Score: {Math.round(vote_average * 10)}%</span>
        <b>Overview: </b>
        <p>{overview}</p>
        <b>Genres: </b>
        <p>{genres.map(genre => genre.name)}</p>

        <div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </>
  );
};
