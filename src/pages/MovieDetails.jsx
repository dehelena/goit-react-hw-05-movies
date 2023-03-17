import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovieById } from 'components/services/MoviesAPI';
import { MovieCard } from 'components/MovieCard/MovieCard';

export const MovieDetails = () => {
  const { id } = useParams(); // деструктуризація 'id' береться з App шляху до динамічного елементу
  const [movie, setMovie] = useState('');

  useEffect(() => {
    const fetchMovieById = async id => {
      try {
        const result = await requestMovieById(id);
        // console.log('results: ', results);
        setMovie(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieById(id);
  }, [id]);

  return (
    <div>
      <MovieCard movie={movie} />
    </div>
  );
};
