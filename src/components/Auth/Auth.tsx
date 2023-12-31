import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/redux.hooks';
import { useCustomSelector } from '../../redux/selectors';
import { logout } from '../../redux/auth/authOperation';
import Button from '../Button';
import { AuthWraper, UserName } from './Auth.styled';

const Auth = () => {
  const navigate = useNavigate();
  const { getIsLoggedIn, getUser: user } = useCustomSelector();
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    void dispatch(logout());
  };

  return (
    <AuthWraper>
      {getIsLoggedIn ? (
        <>
          <UserName>
            <b>Welcome:</b> {user.name}
          </UserName>
          <Button children="Log Out" onClick={handleLogOut} />
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
