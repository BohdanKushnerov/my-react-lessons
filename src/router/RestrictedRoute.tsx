import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RouteNames } from '../router/routeNames';
import { getisAuth } from '../redux/auth/selectors';

interface IRestrictedRouteProps {
  component: React.ComponentType;
  redirectTo?: string;
}

const RestrictedRoute = ({
  component: Component,
  redirectTo = RouteNames.CALENDAR,
}: IRestrictedRouteProps) => {
  const isAuth = useSelector(getisAuth);

  return isAuth ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
