import { createSlice } from '@reduxjs/toolkit';
import { ITodoStore } from '../interface/todo.interface';

const initialState: ITodoStore = {
  allItems: [],
  activeItems: [],
  completedItems: [],
  isLoading: false,
  error: '',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const todoReducer = todoSlice.reducer;
