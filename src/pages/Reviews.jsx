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
        const { results } = await requestMovieReviews(id);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieReviews(id);
  }, [id]);

  return (
    <div>
      {reviews ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p>No reviews for this film</p>
      )}
    </div>
  );
};
