import { Outlet } from 'react-router-dom';
import { NavLinkStyled } from './SharedLayoutStyled';

export const SharedLayout = () => {
  return (
    <div>
      <nav>
        <NavLinkStyled to="/" end>
          Home
        </NavLinkStyled>
        <NavLinkStyled to="/movies" end>
          Movies
        </NavLinkStyled>
      </nav>
      <Outlet />
    </div>
  );
};
