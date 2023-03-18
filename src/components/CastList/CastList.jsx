import React from 'react';
import { CastListStyled } from './CastListStyled';

export const CastList = ({ cast }) => {
  const defaultImg =
    'https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg?ver=6';

  return (
    <>
      <CastListStyled>
        {cast.map(({ id, profile_path, original_name, character }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original/${profile_path}`
                    : defaultImg
                }
                alt={original_name}
              />
              <div>
                <p>
                  <b>{original_name}</b>
                </p>
                {character ? <p>Character: {character} </p> : ''}
              </div>
            </li>
          );
        })}
      </CastListStyled>
    </>
  );
};
