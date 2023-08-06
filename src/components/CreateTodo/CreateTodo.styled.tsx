import styled from '@emotion/styled';
import { Field, Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const TitleInput = styled(Field)`
  width: 400px;
  margin-right: 12px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid silver;
  outline: none;
`;

export const DescriptionInput = styled(Field)`
  width: 545px;
  margin-right: 12px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid silver;
  outline: none;
`;

export const LabelText = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`;
