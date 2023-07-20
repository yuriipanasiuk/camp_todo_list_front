import styled from '@emotion/styled';
import { Field, Form as FormikForm } from 'formik';
import { BiSearchAlt2 } from 'react-icons/bi';

export const Form = styled(FormikForm)`
  margin-left: auto;
`;

export const Input = styled(Field)`
  width: 220px;
  font-size: 18px;
  color: black;
  border: none;
  outline: none;
  border-bottom: 1px solid #1976d2;
`;

export const SearchIcon = styled(BiSearchAlt2)`
  color: #1976d2;
`;
