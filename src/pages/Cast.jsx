import { CastList } from 'components/CastList/CastList';
import { requestMovieCast } from 'components/services/MoviesAPI';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async id => {
      try {
        const { cast } = await requestMovieCast(id);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast(id);
  }, [id]);

  return (
    <div>
      {cast ? (
        <CastList cast={cast} />
      ) : (
        <p>No info for the cast for this movie</p>
      )}
    </div>
  );
};
