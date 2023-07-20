import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Form as FormicForm, Field, ErrorMessage as ErrorFormicError } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const Wraper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: transparent;

  @media screen and (min-width: 767px) {
    width: 608px;
    padding-top: 60px;
    padding-bottom: 60px;

    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    border-radius: 10px;
    @media screen and (min-width: 769px) {
      width: 618px;
    }
  }
`;

export const LoginTitle = styled('p')`
  margin-bottom: 40px;
  font-size: 18px;
  color: black;
  text-align: center;
`;

export const ButtonWraper = styled('div')`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  margin-top: 40px;
`;

export const LinkWraper = styled('div')`
  display: flex;
  justify-content: center;
`;

export const LinkText = styled('p')`
  margin-right: 6px;
  font-size: 12px;
  color: rgba(17, 17, 17, 0.6);
`;

export const NavLink = styled(Link)`
  font-size: 12px;
  color: #3091eb;
  transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :not(:last-child) {
    margin-right: 12px;
  }

  :hover {
    scale: 1.12;
  }
`;

export const Form = styled(FormicForm)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled(Field)`
  width: 280px;
  color: black;
  border: 1px solid #1976d2;
  border-radius: 10px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 14px;
  outline: none;

  @media screen and (min-width: 767px) {
    width: 448px;
    padding-left: 30px;
    padding-top: 14px;
    padding-bottom: 14px;
  }

  @media screen and (min-width: 769px) {
    width: 458px;
  }

  ::placeholder {
    color: rgba(17, 17, 17, 0.6);
    font-size: 14px;
  }
`;

export const ErrorMessage = styled(ErrorFormicError)`
  position: absolute;
  color: red;
  top: 47px;
  left: 14px;

  font-size: 14px;

  @media screen and (min-width: 425px) {
    margin-left: 30px;
    top: 47px;
    left: -14px;
  }
`;

export const ShowIcon = styled(FaEye)`
  size: 4px;
`;

export const HideIcon = styled(FaEyeSlash)``;

export const InputPasswordWraper = styled('div')`
  position: relative;
`;

export const IconWraper = styled('div')`
  position: absolute;
  right: 18px;
  top: 12px;

  @media screen and (min-width: 425px) {
    top: 14px;
  }
`;

export const EmailWraper = styled('div')`
  position: relative;
  margin-bottom: 14px;
`;
