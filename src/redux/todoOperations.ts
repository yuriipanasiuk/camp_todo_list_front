import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ITodo } from '../interface/todo.interface';

import { instance } from '../const/instance';

export const fetchTodos = createAsyncThunk('todo/allTodo', async (_, thunkApi) => {
  try {
    const res = await instance.get('/todo');
    return res.data;
  } catch (error: unknown) {
    if (error instanceof Error) return thunkApi.rejectWithValue(error.message);
  }
});
