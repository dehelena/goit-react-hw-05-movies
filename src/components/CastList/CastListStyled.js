import styled from 'styled-components';

export const CastListStyled = styled.ul`
  display: flex;
  gap: 15px;
  justify-content: space-evenly;
  flex-wrap: wrap;

  & li {
    flex-basis: 230px;
    border: 1px solid #c0c1c2;
    border-radius: 5px;
  }

  & img {
    object-fit: cover;
  }

  & div {
    padding: 10px;
  }
`;
