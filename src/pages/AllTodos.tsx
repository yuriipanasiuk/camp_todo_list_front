import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux.hooks';
import { fetchTodos } from '../redux/operations';

const AllTodos = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // void dispatch(fetchTodos());
  }, [dispatch]);

  return <div>AllTodos</div>;
};

export default AllTodos;
