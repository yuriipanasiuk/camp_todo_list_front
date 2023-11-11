import { Navigate } from 'react-router-dom';

import { useCustomSelector } from '../redux/selectors';
import { IRouteProps } from '../interface/user.interface';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }: IRouteProps) => {
  const { getIsLoggedIn: isLoggedIn } = useCustomSelector();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
