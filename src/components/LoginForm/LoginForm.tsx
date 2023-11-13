import { useState } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';

import { ILoginUser } from '../../interface/user.interface';
import Button from '../Button';
import { loginValidation } from '../../utils/loginValidation';
import { useAppDispatch } from '../../hooks/redux.hooks';
import { login } from '../../redux/auth/authOperation';
import {
  Wraper,
  LoginTitle,
  Form,
  EmailWraper,
  Input,
  ErrorMessage,
  InputPasswordWraper,
  IconWraper,
  ShowIcon,
  HideIcon,
  ButtonWraper,
  LinkWraper,
  LinkText,
  NavLink,
} from './LoginForm.styled';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [inputType, setInputType] = useState<boolean>(true);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: ILoginUser, { resetForm }: FormikHelpers<ILoginUser>) => {
    if (!values) {
      return;
    }

    await dispatch(login(values));

    navigate('/');

    resetForm();
  };

  const onShowPassword = () => {
    setShowPassword(prevState => !prevState);
    setInputType(prevState => !prevState);
  };

  return (
    <Wraper>
      <LoginTitle>LOGIN FORM</LoginTitle>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={loginValidation}
      >
        <Form>
          <EmailWraper>
            <Input type="email" name="email" placeholder="Email" />
            <ErrorMessage component="span" name="email" />
          </EmailWraper>

          <InputPasswordWraper>
            <Input name="password" placeholder="Password" type={inputType ? 'password' : 'text'} />
            <IconWraper>
              {showPassword ? (
                <ShowIcon onClick={onShowPassword} />
              ) : (
                <HideIcon onClick={onShowPassword} />
              )}
            </IconWraper>
            <ErrorMessage component="span" name="password" />
          </InputPasswordWraper>

          <ButtonWraper>
            <Button children="Login" type="submit" />
          </ButtonWraper>
          <LinkWraper>
            <LinkText>Dont have an account? </LinkText>
            <NavLink to="/signup">Register</NavLink>
            <NavLink to="/">Back to Home</NavLink>
          </LinkWraper>
        </Form>
      </Formik>
    </Wraper>
  );
};

export default LoginForm;
