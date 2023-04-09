import { Route, Routes } from 'react-router-dom';
// import styled from 'styled-components';
import Home from '../pages/Home';
import Dogs from '../pages/Dogs';
import DogDetails from '../pages/DogDetails';
import Layout from './Layout';
import Cats from '../pages/Cats';

// const StyledNavLink = styled(NavLink)`
//   &.active {
//     color: orangered;
//   }
// `;

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dogs" element={<Dogs />}>
            <Route path="cats" element={<Cats />} />
          </Route>
          <Route path="dogs/:id" element={<DogDetails />} />
          <Route path="cats" element={<Cats />} />
        </Route>
      </Routes>
    </div>
  );
};
