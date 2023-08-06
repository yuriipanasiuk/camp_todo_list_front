import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { ITodoStore } from '../../interface/todo.interface';
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  getOneTodo,
  clearOneTodo,
  completeTodo,
  searchTodo,
} from './todoOperations';
import {
  clearTodoSuccessReducer,
  completeTodoReduccer,
  createTodoReducer,
  deleteTodoReducer,
  getAllTodoReducer,
  getTodoByIdReducer,
  pendingTodoReducer,
  rejectedTodoReducer,
  searchTodoSuccessReducer,
} from './todoReducer';

const initialState: ITodoStore = {
  allItems: [],
  oneTodo: {},
  activeItems: [],
  completedItems: [],
  isLoading: false,
  isAdding: false,
  searchValue: '',
};

const extraActions = [addTodo, fetchTodos, getOneTodo, deleteTodo, completeTodo];
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
      .addCase(completeTodo.fulfilled, completeTodoReduccer)
      .addCase(deleteTodo.fulfilled, deleteTodoReducer)
      .addCase(clearOneTodo, clearTodoSuccessReducer)
      .addCase(searchTodo, searchTodoSuccessReducer)
      .addMatcher(getAction('pending'), pendingTodoReducer)
      .addMatcher(getAction('rejected'), rejectedTodoReducer),
});

export const todoReducer = todoSlice.reducer;
