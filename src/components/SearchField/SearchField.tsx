import { Formik } from 'formik';

import { TypeSearch } from '../../type/todo.type';
import { Input, SearchIcon, Form } from './SearchField.styled';

const SearchField = () => {
  const handleSubmit: TypeSearch = (data, { resetForm }) => {
    if (!data) return;
    console.log(data);
    resetForm();
  };

  return (
    <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
      <Form>
        <SearchIcon size={24} />
        <Input type="text" name="search" />
      </Form>
    </Formik>
  );
};

export default SearchField;
