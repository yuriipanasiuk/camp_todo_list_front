import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { ITodoStore } from '../../interface/todo.interface';
import { addTodo, fetchTodos } from './todoOperations';
import {
  createTodoReducer,
  getAllTodoReducer,
  pendingTodoReducer,
  rejectedTodoReducer,
} from './todoReducer';

const initialState: ITodoStore = {
  allItems: [],
  activeItems: [],
  completedItems: [],
  isLoading: false,
  isAdding: false,
};

const extraActions = [addTodo, fetchTodos];
const getAction = (type: string) => isAnyOf(...extraActions.map((action: any) => action[type]));

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchTodos.fulfilled, getAllTodoReducer)
      .addCase(addTodo.fulfilled, createTodoReducer)
      .addMatcher(getAction('pending'), pendingTodoReducer)
      .addMatcher(getAction('rejected'), rejectedTodoReducer),
});

export const todoReducer = todoSlice.reducer;
