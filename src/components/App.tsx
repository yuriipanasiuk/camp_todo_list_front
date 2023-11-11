import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useCustomSelector } from '../redux/selectors';
import { useAppDispatch } from '../hooks/redux.hooks';
import { getCurrentUser } from '../redux/auth/authOperation';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import SharedLayout from './SharedLayout';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AllTodos = lazy(() => import('../pages/AllTodos'));

function App() {
  const { getToken: token, getIsRefreshing: isRefreshing } = useCustomSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      void dispatch(getCurrentUser());
    }
  }, [dispatch, token]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate to="all" />} />
            <Route
              path="all"
              element={<PrivateRoute component={AllTodos} redirectTo="/signin" />}
            />
          </Route>
          <Route
            path="/signin"
            element={<RestrictedRoute component={SignIn} redirectTo="/all" />}
          />
          <Route
            path="/signup"
            element={<RestrictedRoute component={SignUp} redirectTo="/all" />}
          />
        </Routes>
      </>
    )
  );
}

export default App;
