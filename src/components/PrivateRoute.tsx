import { Navigate } from 'react-router-dom';
import { useCustomSelector } from '../redux/selectors';
import { IRouteProps } from '../interface/user.interface';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }: IRouteProps) => {
  const { getIsLoggedIn: isLoggedIn, getIsRefreshing: isRefreshing } = useCustomSelector();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
