import { PayloadAction } from '@reduxjs/toolkit';
import { ITodoStore, ITodo } from '../../interface/todo.interface';

export const getAllTodoReducer = (state: ITodoStore, action: PayloadAction<{ todos: ITodo[] }>) => {
  state.isLoading = false;
  state.allItems = action.payload.todos;
};

export const getTodoByIdReducer = (state: ITodoStore, action: PayloadAction<ITodo>) => {
  state.isLoading = false;
  state.oneTodo = action.payload;
};

export const createTodoReducer = (state: ITodoStore, action: PayloadAction<ITodo>) => {
  state.isLoading = false;
  state.allItems.push(action.payload);
};

export const completeTodoReduccer = (state: ITodoStore, action: PayloadAction<ITodo>) => {
  const { _id } = action.payload;
  state.isLoading = false;
  state.oneTodo = action.payload;
  const itemIndex = state.allItems.findIndex(item => item._id === _id);
  if (itemIndex !== -1) {
    state.allItems[itemIndex] = { ...state.allItems[itemIndex], ...action.payload };
  }
};

export const deleteTodoReducer = (state: ITodoStore, action: PayloadAction<ITodo>) => {
  state.isLoading = false;
  state.allItems = state.allItems.filter(item => item._id !== action.payload._id);
};

export const pendingTodoReducer = (state: ITodoStore) => {
  state.isLoading = true;
};

export const rejectedTodoReducer = (state: ITodoStore) => {
  state.isLoading = false;
};

export const clearTodoSuccessReducer = (state: ITodoStore) => {
  state.oneTodo = {};
};

export const searchTodoSuccessReducer = (state: ITodoStore, action: PayloadAction<string>) => {
  state.searchValue = action.payload;
};
