import { useNavigate } from 'react-router-dom';

import { useAppSelectot, useAppDispatch } from '../../hooks/redux.hooks';
import { logout } from '../../redux/authOperation';
import Button from '../Button';
import { AuthWraper } from './Auth.styled';

const Auth = () => {
  const navigate = useNavigate();
  const isLogedIn = useAppSelectot(state => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();

  const handleLOgOut = () => {
    void dispatch(logout());
  };

  return (
    <AuthWraper>
      {isLogedIn ? (
        <Button children="Log Out" onClick={handleLOgOut} />
      ) : (
        <>
          <Button children="Sing In" onClick={() => navigate('/signin')} />
          <Button children="Sing Up" onClick={() => navigate('/signup')} />
        </>
      )}
    </AuthWraper>
  );
};

export default Auth;
