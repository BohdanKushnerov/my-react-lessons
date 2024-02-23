import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RouteNames } from '../router/routeNames';
import { getisAuth } from '../redux/auth/selectors';

interface IPrivateRouteProps {
  component: React.ComponentType;
  redirectTo?: string;
}

const PrivateRoute = ({
  component: Component,
  redirectTo = RouteNames.LOGIN,
}: IPrivateRouteProps) => {
  const isAuth = useSelector(getisAuth);

  return isAuth ? <Component /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
