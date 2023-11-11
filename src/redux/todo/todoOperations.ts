import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '../../const/instance';
import { IComplete, ICreateTodo } from '../../interface/todo.interface';

export const fetchTodos = createAsyncThunk('todo/allTodo', async (query: string, thunkApi) => {
  try {
    const res = await instance.get(`/todo?type=${query}`);
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

export const completeTodo = createAsyncThunk('todo/complete', async (data: IComplete, thunkApi) => {
  try {
    const todo = await instance.patch(`/todo/${data.id}`, {
      isComplete: data.isComplete,
    });
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

export const clearOneTodo = createAction<void>('todo/clearOneTodo');

export const searchTodo = createAction<string>('todo/search');
