import { Navigate } from 'react-router-dom';
import { RouteNames } from 'router/routeNames';

interface IRestrictedRouteProps {
  component: React.ComponentType;
  redirectTo?: string;
}

const RestrictedRoute = ({
  component: Component,
  redirectTo = RouteNames.CALENDAR,
}: IRestrictedRouteProps) => {
  const isLoggedIn = false;

  return <>{isLoggedIn ? <Navigate to={redirectTo} /> : <Component />}</>;
};

export default RestrictedRoute;
