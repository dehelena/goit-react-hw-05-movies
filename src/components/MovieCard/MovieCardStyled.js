import styled from 'styled-components';

export const MovieCardStyled = styled.div`
  display: flex;
  gap: 15px;

  & .wrapper {
    padding: 0 15px;
  }

  & h2 {
    margin-bottom: 30px;
    font-size: 30px;
    line-height: 1.8;
  }
  & p {
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 1.67;
  }

  & b {
    font-size: 20px;
  }
`;

export const AddInfoStyled = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  text-align: center;

  & h3 {
    margin-bottom: 10px;
    font-size: 25px;
  }

  & ul {
    display: flex;
    gap: 10px;
    justify-content: center;
    line-height: 1.67;
  }

  & li {
    padding: 8px 10px;
    font-size: 20px;
  }

  & a {
    text-decoration: none;
    padding: 8px 10px;
    border-radius: 3px;
    color: #000;
    transition: background-color 200ms linear;
  }

  & a:hover {
    background-color: #f7f1e5;
  }
`;
