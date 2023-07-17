import { Field, Form, Formik } from 'formik';
import { TypeSearch } from '../../type/todo.type';

const SearchField = () => {
  const handleSubmit: TypeSearch = (data, { resetForm }) => {
    if (!data) return;
    console.log(data);
    resetForm();
  };

  return (
    <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
      <Form>
        <Field type="text" name="search" />
      </Form>
    </Formik>
  );
};

export default SearchField;
