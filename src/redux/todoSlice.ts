import { createSlice } from '@reduxjs/toolkit';
import { ITodoStore } from '../interface/todo.interface';
import { addTodo, fetchTodos } from './todoOperations';

const initialState: ITodoStore = {
  allItems: [],
  activeItems: [],
  completedItems: [],
  isLoading: false,
  isAdding: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchTodos.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allItems = action.payload.todos;
      })
      .addCase(fetchTodos.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addTodo.pending, state => {
        state.isAdding = false;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.isAdding = true;
        state.allItems.push(action.payload);
      })
      .addCase(addTodo.rejected, state => {
        state.isAdding = false;
      }),
});

export const todoReducer = todoSlice.reducer;
