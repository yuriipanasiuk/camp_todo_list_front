import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '../../const/instance';
import { ICreateTodo } from '../../interface/todo.interface';

export const fetchTodos = createAsyncThunk('todo/allTodo', async (_, thunkApi) => {
  try {
    const res = await instance.get('/todo');
    return res.data;
  } catch (error: unknown) {
    if (error instanceof Error) return thunkApi.rejectWithValue(error.message);
  }
});

export const addTodo = createAsyncThunk('todo/addTodo', async (data: ICreateTodo, thunkApi) => {
  try {
    const todo = await instance.post('/todo', data);

    return todo.data;
  } catch (error: unknown) {
    if (error instanceof Error) return thunkApi.rejectWithValue(error.message);
  }
});

export const getOneTodo = createAsyncThunk('todo/getOne', async (data: string, thunkApi) => {
  try {
    const todo = await instance.get(`/todo/${data}`);
    return todo.data;
  } catch (error: unknown) {
    if (error instanceof Error) return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteTodo = createAsyncThunk('todo/delete', async (data: string, thunkApi) => {
  try {
    const todo = await instance.delete(`/todo/${data}`);
    return todo.data;
  } catch (error: unknown) {
    if (error instanceof Error) return thunkApi.rejectWithValue(error.message);
  }
});
