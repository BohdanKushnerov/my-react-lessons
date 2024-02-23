import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import { RouteNames } from '../router/routeNames';
import Calendar from '../pages/Calendar';
import RestrictedRoute from 'router/RestrictedRoute';
import PrivateRoute from 'router/PrivateRoute';
import { FC } from 'react';
import NavBar from './NavBar';

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: RouteNames.CALENDAR,
        element: (
          <PrivateRoute component={Calendar} redirectTo={RouteNames.LOGIN} />
        ),
      },
      {
        path: RouteNames.LOGIN,
        element: (
          <RestrictedRoute component={Login} redirectTo={RouteNames.CALENDAR} />
        ),
      },
    ],
  },
]);

const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
