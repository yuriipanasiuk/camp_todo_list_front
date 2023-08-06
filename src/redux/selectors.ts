import { useAppSelector } from '../hooks/redux.hooks';

export const useCustomSelector = () => {
  return {
    getIsLoggedIn: useAppSelector(state => state.auth.isLoggedIn),
    getUser: useAppSelector(state => state.auth.user),
    getIsRefreshing: useAppSelector(state => state.auth.isRefreshing),
    getIsRegiser: useAppSelector(state => state.auth.isRegister),
    getToken: useAppSelector(state => state.auth.accessToken),
    getAllTodos: useAppSelector(state => state.todos.allItems),
    oneTodo: useAppSelector(state => state.todos.oneTodo),
    searchValue: useAppSelector(state => state.todos.searchValue),
  };
};
