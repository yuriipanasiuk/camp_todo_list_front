import * as yup from 'yup';

export const loginValidation = yup.object().shape({
  email: yup.string().max(30).required('Please enter your email'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(30)
    .required('Please enter your password'),
});
