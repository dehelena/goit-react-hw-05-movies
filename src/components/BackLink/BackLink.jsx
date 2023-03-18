import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import BackLinkStyled from './BackLinkStyled';

const BackLink = ({ to, children }) => {
  return (
    <BackLinkStyled to={to}>
      <BsArrowLeft size="24" />
      {children}
    </BackLinkStyled>
  );
};

export default BackLink;
