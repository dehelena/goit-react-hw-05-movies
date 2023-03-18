import styled from 'styled-components';

export const SearchbarStyled = styled.div`
  & form {
    height: 30px;
  }

  & input {
    height: 100%;
    width: 230px;
  }

  & button {
    height: 100%;
    min-width: 100px;
    border: 1px solid transparent;
    border-radius: 3px;
    background-color: #f7f1e5;
    text-transform: uppercase;
    font-weight: 500px;
    transition: background-color 300ms linear;
  }

  & button:hover {
    background-color: #ffbfa9;
  }
`;
