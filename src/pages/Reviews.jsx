import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { requestMovieReviews } from 'components/services/MoviesAPI';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async id => {
      try {
        const { result } = await requestMovieReviews(id);
        setReviews(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieReviews(id);
  }, [id]);

  return (
    <div>
      <ReviewsList reviews={reviews} />
    </div>
  );
};
