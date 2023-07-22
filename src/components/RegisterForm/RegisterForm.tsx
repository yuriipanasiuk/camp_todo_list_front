import { useState } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';

import { IRegisterUser } from '../../interface/user.interface';
import { registerValidation } from '../../utils/registerValidation';
import { useAppDispatch } from '../../hooks/redux.hooks';
import { register } from '../../redux/authOperation';

import Button from '../Button';
import {
  Wraper,
  RegisterTitle,
  Form,
  InputWraper,
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
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [inputType, setInputType] = useState<boolean>(true);
  const [inputConfirmType, setInputConfirmType] = useState<boolean>(true);

  // const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (values: IRegisterUser, { resetForm }: FormikHelpers<IRegisterUser>) => {
    if (!values) {
      return;
    }
    // navigate('/');
    void dispatch(register(values));

    resetForm();
  };

  const onShowPassword = () => {
    setShowPassword(prevState => !prevState);
    setInputType(prevState => !prevState);
  };

  const onShowConfirmPassword = () => {
    setShowConfirmPassword(prevState => !prevState);
    setInputConfirmType(prevState => !prevState);
  };

  return (
    <Wraper>
      <RegisterTitle>REGISTER FORM</RegisterTitle>
      <Formik
        initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
        onSubmit={handleSubmit}
        validationSchema={registerValidation}
      >
        <Form>
          <InputWraper>
            <Input type="text" name="name" placeholder="Name" />
            <ErrorMessage component="span" name="name" />
          </InputWraper>
          <InputWraper>
            <Input type="email" name="email" placeholder="Email" />
            <ErrorMessage component="span" name="email" />
          </InputWraper>

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
          <InputPasswordWraper>
            <Input
              name="confirmPassword"
              placeholder="Confirm Password"
              type={inputConfirmType ? 'password' : 'text'}
            />
            <IconWraper>
              {showConfirmPassword ? (
                <ShowIcon onClick={onShowConfirmPassword} />
              ) : (
                <HideIcon onClick={onShowConfirmPassword} />
              )}
            </IconWraper>
            <ErrorMessage component="span" name="confirmPassword" />
          </InputPasswordWraper>

          <ButtonWraper>
            <Button children="Register" type="submit" />
          </ButtonWraper>
          <LinkWraper>
            <LinkText>Already have an account?</LinkText>
            <NavLink to="/signin">Login</NavLink>
            <NavLink to="/">Back to Home</NavLink>
          </LinkWraper>
        </Form>
      </Formik>
    </Wraper>
  );
};
