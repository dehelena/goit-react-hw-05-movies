import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BackLinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 20px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 300ms linear;

  :hover {
    color: tomato;
  }
`;

export default BackLinkStyled;
