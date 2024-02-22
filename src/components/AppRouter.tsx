import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import { RouteNames } from '../router/routeNames';
import Calendar from '../pages/Calendar';
import RestrictedRoute from 'router/RestrictedRoute';
import PrivateRoute from 'router/PrivateRoute';
import { FC } from 'react';
import NavBar from './NavBar';

// interface IAppRouterProps {
//   children: ReactNode;
// }

// <RestrictedRoute component={Login} redirectTo={RouteNames.CALENDAR} />
// <PrivateRoute component={Calendar} redirectTo={RouteNames.LOGIN} />

const router = createBrowserRouter([
  {
    // path: '/',
    element: <NavBar />,
    // loader: rootLoader,
    children: [
      {
        path: RouteNames.CALENDAR,
        element: (
          <RestrictedRoute component={Login} redirectTo={RouteNames.CALENDAR} />
        ),
        // loader: teamLoader,
      },
      {
        path: RouteNames.LOGIN,
        element: (
          <PrivateRoute component={Calendar} redirectTo={RouteNames.LOGIN} />
        ),
        // loader: teamLoader,
      },
    ],
  },
]);

const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
