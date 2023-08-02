import { useAppDispatch } from '../../hooks/redux.hooks';
import { deleteTodo, getOneTodo } from '../../redux/todo/todoOperations';
import { ITodoProps } from '../../interface/todo.interface';
import { Items } from './TodoItems.styled';

const TodoItem = ({ items }: ITodoProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    void dispatch(deleteTodo(id));
  };

  const handleView = (id: string) => {
    void dispatch(getOneTodo(id));
  };

  return (
    <>
      {items.map(({ _id, title, description }) => (
        <Items key={_id}>
          <p>{title}</p>
          <p>{description}</p>
          <button type="button" onClick={() => handleView(_id)}>
            View
          </button>
          <button type="button" onClick={() => handleDelete(_id)}>
            Delete
          </button>
        </Items>
      ))}
    </>
  );
};

export default TodoItem;
