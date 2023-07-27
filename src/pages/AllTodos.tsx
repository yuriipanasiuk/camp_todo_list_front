import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux.hooks';
import { useCustomSelector } from '../redux/selectors';
import { fetchTodos } from '../redux/todo/todoOperations';

const AllTodos = () => {
  const dispatch = useAppDispatch();
  const { getAllTodos } = useCustomSelector();

  useEffect(() => {
    void dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      {getAllTodos.length > 0 ? (
        <ul>
          {getAllTodos?.map(({ _id, title, description }) => (
            <li key={_id}>
              <p>{title}</p>
              <p>{description}</p>
              <button>View</button>
              <button>Delete</button>
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
