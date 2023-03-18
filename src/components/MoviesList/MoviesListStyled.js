import styled from 'styled-components';

export const MovieListStyled = styled.ul`
  margin-top: 30px;
  font-size: 20px;
  line-height: 1.6;

  & a {
    text-decoration: none;
    color: #000;
    padding: 5px;
    border-radius: 3px;
    transition: background-color 300ms linear;
  }

  & a:hover {
    background-color: #f7f1e5;
  }
`;
