import { PayloadAction } from '@reduxjs/toolkit';
import { ITodoStore, ITodo } from '../../interface/todo.interface';

export const getAllTodoReducer = (state: ITodoStore, action: PayloadAction<{ todos: ITodo[] }>) => {
  state.isLoading = false;
  state.allItems = action.payload.todos;
};

export const createTodoReducer = (state: ITodoStore, action: PayloadAction<ITodo>) => {
  state.isLoading = false;
  state.allItems.push(action.payload);
};

export const pendingTodoReducer = (state: ITodoStore) => {
  state.isLoading = true;
};

export const rejectedTodoReducer = (state: ITodoStore) => {
  state.isLoading = false;
};
