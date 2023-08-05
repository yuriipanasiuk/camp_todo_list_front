import { useAppDispatch } from '../../hooks/redux.hooks';
import { deleteTodo, getOneTodo, clearOneTodo } from '../../redux/todo/todoOperations';
import Modal from '../Modal/Modal';
import { ITodoProps } from '../../interface/todo.interface';
import { useCustomSelector } from '../../redux/selectors';

import { Items, ModalWraper, Title, Icon } from './TodoItems.styled';

const TodoItem = ({ items }: ITodoProps) => {
  const dispatch = useAppDispatch();
  const { getOneTodo: todo } = useCustomSelector();

  const handleDelete = (id: string) => {
    void dispatch(deleteTodo(id));
    dispatch(clearOneTodo());
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
              <ModalWraper>
                <Icon onClick={() => dispatch(clearOneTodo())} />
                <Title>Todo modal</Title>
                <p>
                  <b>Title:</b> {title}
                </p>
                <p>
                  <b>Description:</b> {description}
                </p>
                <button type="button" onClick={() => handleDelete(_id)}>
                  Delete
                </button>
              </ModalWraper>
            </Modal>
          )}
        </Items>
      ))}
    </>
  );
};

export default TodoItem;
