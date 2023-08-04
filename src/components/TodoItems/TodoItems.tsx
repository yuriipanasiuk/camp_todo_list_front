import { useAppDispatch } from '../../hooks/redux.hooks';
import { deleteTodo, getOneTodo, clearOneTodo } from '../../redux/todo/todoOperations';
import Modal from '../Modal/Modal';
import { ITodoProps } from '../../interface/todo.interface';
import { Items } from './TodoItems.styled';
import { useCustomSelector } from '../../redux/selectors';

const TodoItem = ({ items }: ITodoProps) => {
  const dispatch = useAppDispatch();
  const { getOneTodo: todo } = useCustomSelector();

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
          {Object.keys(todo).length > 0 && (
            <Modal onClick={() => dispatch(clearOneTodo())}>
              <p>Modal</p>
            </Modal>
          )}
        </Items>
      ))}
    </>
  );
};

export default TodoItem;
