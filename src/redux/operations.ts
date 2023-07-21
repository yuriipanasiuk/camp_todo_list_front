import axios, { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITodo } from '../interface/todo.interface';
import { IRegisterUser, IUser } from '../interface/user.interface';

export const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
});

const setToken = (token?: string) => {
  if (token) {
    return (instance.defaults.headers.Authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.Authorization = '';
};

export const fetchTodos = createAsyncThunk('todo/allTodo', async (_, thunkApi) => {
  try {
    const res: AxiosResponse<ITodo[]> = await instance.get('/todo');
    return res.data;
  } catch (error: unknown) {
    if (error instanceof Error) return thunkApi.rejectWithValue(error.message);
  }
});

export const register = createAsyncThunk(
  'auth/register',
  async (credential: IRegisterUser, thunkApi) => {
    try {
      const res: AxiosResponse<IUser> = await instance.post('/user/signup', {
        name: credential.name,
        email: credential.email,
        password: credential.password,
      });
      return res.data;
    } catch (error: unknown) {
      if (error instanceof Error) return thunkApi.rejectWithValue(error.message);
    }
  }
);
