import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLinkStyled } from './SharedLayoutStyled';

export const SharedLayout = () => {
  return (
    <div>
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </nav>
      <Outlet />
    </div>
  );
};
