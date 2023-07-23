import { useEffect } from 'react';
import { useAppDispatch, useAppSelectot } from '../hooks/redux.hooks';
import { fetchTodos } from '../redux/todoOperations';

const AllTodos = () => {
  const dispatch = useAppDispatch();
  const todoItems = useAppSelectot(state => state.todos.allItems);

  useEffect(() => {
    void dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      {todoItems.length > 0 ? (
        <ul>
          {todoItems?.map(({ _id, title, description }) => (
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
