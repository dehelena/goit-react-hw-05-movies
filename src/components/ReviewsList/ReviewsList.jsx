import React from 'react';
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
