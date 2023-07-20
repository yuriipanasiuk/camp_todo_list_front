import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import { AuthWraper } from './Auth.styled';

const Auth = () => {
  const navigate = useNavigate();

  return (
    <AuthWraper>
      <Button children="Sing In" onClick={() => navigate('/signin')} />
      <Button children="Sing Up" onClick={() => navigate('/signup')} />
    </AuthWraper>
  );
};

export default Auth;
