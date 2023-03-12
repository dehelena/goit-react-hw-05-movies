import { Routes, Route, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Cast } from './Cast/Cast';
import { Home } from './Home/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Movies } from './Movies/Movies';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/home" end>
          Home
        </NavLink>
        <NavLink to="/movies" end>
          Movies
        </NavLink>
      </nav>

      <Routes>
        <Route path="/cast" element={<Cast />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/reviews/:movieId" element={<Reviews />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <ToastContainer />
    </div>
  );
};
