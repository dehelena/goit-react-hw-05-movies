import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { requestMovieReviews } from 'components/services/MoviesAPI';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!id) return;

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
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p>No reviews for this film</p>
      )}
    </div>
  );
};

export default Reviews;
