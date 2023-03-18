import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { AddInfoStyled, MovieCardStyled } from './MovieCardStyled';

const MovieCard = ({ movie }) => {
  const { title, poster_path, genres, release_date, overview, vote_average } =
    movie;
  const defaultImg =
    'https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg?ver=6';

  const releaseYear = parseInt(release_date);
  const location = useLocation();

  return (
    <>
      <div>
        <MovieCardStyled>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : defaultImg
            }
            alt={title}
            width="400"
          />
          <div className="wrapper">
            <h2>
              {title} ({releaseYear})
            </h2>
            <p>User Score: {Math.round(vote_average * 10)}%</p>
            <b>Overview: </b>
            <p>{overview}</p>
            <b>Genres: </b>
            <p>{genres?.map(genre => genre.name).join(', ')}</p>
          </div>
        </MovieCardStyled>

        <div>
          <AddInfoStyled>
            <h3>Additional information</h3>
            <ul>
              <li>
                <NavLink state={{ from: location.state?.from }} to="cast">
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink state={{ from: location.state?.from }} to="reviews">
                  Reviews
                </NavLink>
              </li>
            </ul>
          </AddInfoStyled>
          <Outlet />
        </div>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
      release_date: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default MovieCard;
