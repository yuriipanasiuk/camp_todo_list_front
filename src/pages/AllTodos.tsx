import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux.hooks';
import { useCustomSelector } from '../redux/selectors';
import { fetchTodos } from '../redux/todo/todoOperations';
import TodoItems from '../components/TodoItems';

const AllTodos = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { getAllTodos } = useCustomSelector();

  const searchTypeQuery = searchParams.get('type');

  useEffect(() => {
    void dispatch(fetchTodos(searchTypeQuery || ''));
  }, [dispatch, searchTypeQuery]);

  return (
    <>
      {getAllTodos.length > 0 ? (
        <ul>
          <TodoItems items={getAllTodos} />
        </ul>
      ) : (
        <p>Your todo list is empty!</p>
      )}
    </>
  );
};

export default AllTodos;
