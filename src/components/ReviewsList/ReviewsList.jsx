import React from 'react';

export const ReviewsList = ({ reviews }) => {
  return (
    <>
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
