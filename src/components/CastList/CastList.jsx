export const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ id, original_name, character }) => {
        return (
          <li key={id}>
            <b>{original_name}</b>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
