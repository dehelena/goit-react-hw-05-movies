import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { requestMovieById } from 'components/services/MoviesAPI';
import MovieCard from 'components/MovieCard/MovieCard';
import BackLink from 'components/BackLink/BackLink';

const MovieDetails = () => {
  const { id } = useParams(); // деструктуризація 'id' береться з App шляху до динамічного елементу
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    if (!id) return;

    const fetchMovieById = async id => {
      try {
        const result = await requestMovieById(id);
        setMovie(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieById(id);
  }, [id]);

  return (
    <div>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <MovieCard movie={movie} />
    </div>
  );
};

export default MovieDetails;
