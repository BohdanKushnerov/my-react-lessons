import { Navigate } from 'react-router-dom';
import { RouteNames } from 'router/routeNames';

interface IPrivateRouteProps {
  component: React.ComponentType;
  redirectTo?: string;
}

const PrivateRoute = ({
  component: Component,
  redirectTo = RouteNames.LOGIN,
}: IPrivateRouteProps) => {
  const isLoggedIn = false;

  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
