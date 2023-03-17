export const ReviewsList = ({ reviews }) => {
  <ul>
    {reviews.length > 0 ? (
      reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        );
      })
    ) : (
      <p>No reviews for this film</p>
    )}
  </ul>;
};
