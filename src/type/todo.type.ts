import { FormikValues, FormikHelpers } from 'formik';

export type TypeSearch = (
  values: FormikValues,
  formikHelpers: FormikHelpers<{ search: string }>
) => void;
