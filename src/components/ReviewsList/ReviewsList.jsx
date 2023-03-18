import React from 'react';
import PropTypes from 'prop-types';
import { ReviewsListStyled } from './ReviewsListStyled';

export const ReviewsList = ({ reviews }) => {
  return (
    <>
      <ReviewsListStyled>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <p className="author">
                <b>Author: {author}</b>
              </p>
              <p>{content}</p>
            </li>
          );
        })}
      </ReviewsListStyled>
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
