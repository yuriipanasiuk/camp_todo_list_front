import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { ITodoStore } from '../../interface/todo.interface';
import { addTodo, deleteTodo, fetchTodos, getOneTodo, clearOneTodo } from './todoOperations';
import {
  clearTodoSuccessReducer,
  createTodoReducer,
  deleteTodoReducer,
  getAllTodoReducer,
  getTodoByIdReducer,
  pendingTodoReducer,
  rejectedTodoReducer,
} from './todoReducer';

const initialState: ITodoStore = {
  allItems: [],
  oneTodo: {},
  activeItems: [],
  completedItems: [],
  isLoading: false,
  isAdding: false,
};

const extraActions = [addTodo, fetchTodos, getOneTodo, deleteTodo];
const getAction = (type: string) => isAnyOf(...extraActions.map((action: any) => action[type]));

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchTodos.fulfilled, getAllTodoReducer)
      .addCase(addTodo.fulfilled, createTodoReducer)
      .addCase(getOneTodo.fulfilled, getTodoByIdReducer)
      .addCase(deleteTodo.fulfilled, deleteTodoReducer)
      .addCase(clearOneTodo, clearTodoSuccessReducer)
      .addMatcher(getAction('pending'), pendingTodoReducer)
      .addMatcher(getAction('rejected'), rejectedTodoReducer),
});

export const todoReducer = todoSlice.reducer;
