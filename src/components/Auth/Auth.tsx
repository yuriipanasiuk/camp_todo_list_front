import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/redux.hooks';
import { useCustomSelector } from '../../redux/selectors';
import { logout } from '../../redux/auth/authOperation';
import Button from '../Button';
import { AuthWraper } from './Auth.styled';

const Auth = () => {
  const navigate = useNavigate();
  const { getIsLoggedIn, getUser: user } = useCustomSelector();
  const dispatch = useAppDispatch();

  const handleLOgOut = () => {
    void dispatch(logout());
  };

  return (
    <AuthWraper>
      {getIsLoggedIn ? (
        <>
          <p>{user.name}</p>
          <Button children="Log Out" onClick={handleLOgOut} />
        </>
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
