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
        const { result } = await requestMovieCast(id);
        setCast(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast(id);
  }, [id]);

  return (
    <div>
      <CastList cast={cast} />
    </div>
  );
};
