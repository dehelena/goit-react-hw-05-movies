import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, NavLinkStyled } from './SharedLayoutStyled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </nav>
      </Header>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
