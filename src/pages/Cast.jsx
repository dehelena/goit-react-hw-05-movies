import { CastList } from 'components/CastList/CastList';
import { requestMovieCast } from 'components/services/MoviesAPI';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!id) return;

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
      {cast.length > 0 ? (
        <CastList cast={cast} />
      ) : (
        <p>No info for the cast for this movie</p>
      )}
    </div>
  );
};

export default Cast;
