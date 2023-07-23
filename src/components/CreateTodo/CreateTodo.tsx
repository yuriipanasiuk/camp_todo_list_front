import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useAppDispatch } from '../../hooks/redux.hooks';
import { ICreateTodo } from '../../interface/todo.interface';
import { addTodo } from '../../redux/todoOperations';
import Button from '../Button';

const CreateTodo = () => {
  const dispath = useAppDispatch();

  const handleAddTodo = (values: ICreateTodo, { resetForm }: FormikHelpers<ICreateTodo>) => {
    if (!values) return;

    void dispath(addTodo(values));

    resetForm();
  };

  return (
    <>
      <Formik initialValues={{ title: '', description: '' }} onSubmit={handleAddTodo}>
        <Form>
          <Field type="text" name="title" />
          <Field type="text" name="description" />
          <Button children="Add todo" type="submit" />
        </Form>
      </Formik>
    </>
  );
};

export default CreateTodo;
