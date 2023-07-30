import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux.hooks';
import { useCustomSelector } from '../redux/selectors';
import { deleteTodo, fetchTodos, getOneTodo } from '../redux/todo/todoOperations';

const AllTodos = () => {
  const dispatch = useAppDispatch();
  const { getAllTodos } = useCustomSelector();

  useEffect(() => {
    void dispatch(fetchTodos());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    void dispatch(deleteTodo(id));
  };

  const handleView = (id: string) => {
    void dispatch(getOneTodo(id));
  };

  return (
    <div>
      {getAllTodos.length > 0 ? (
        <ul>
          {getAllTodos?.map(({ _id, title, description }) => (
            <li key={_id}>
              <p>{title}</p>
              <p>{description}</p>
              <button type="button" onClick={() => handleView(_id)}>
                View
              </button>
              <button type="button" onClick={() => handleDelete(_id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your todo list is empty!</p>
      )}
    </div>
  );
};

export default AllTodos;
