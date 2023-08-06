import { Formik, FormikHelpers } from 'formik';
import { useAppDispatch } from '../../hooks/redux.hooks';
import { ICreateTodo } from '../../interface/todo.interface';
import { addTodo } from '../../redux/todo/todoOperations';
import Button from '../Button';
import { Form, TitleInput, DescriptionInput } from './CreateTodo.styled';

const CreateTodo = () => {
  const dispath = useAppDispatch();

  const handleAddTodo = (values: ICreateTodo, { resetForm }: FormikHelpers<ICreateTodo>) => {
    if (!values.title || !values.description) return;

    void dispath(addTodo(values));

    resetForm();
  };

  return (
    <>
      <Formik initialValues={{ title: '', description: '' }} onSubmit={handleAddTodo}>
        <Form>
          <TitleInput type="text" name="title" placeholder="Enter title" />

          <DescriptionInput type="text" name="description" placeholder="Enter description" />

          <Button children="Add todo" type="submit" width={277} />
        </Form>
      </Formik>
    </>
  );
};

export default CreateTodo;
