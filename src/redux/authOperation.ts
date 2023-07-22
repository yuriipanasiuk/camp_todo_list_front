import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginUser, IRegisterUser } from '../interface/user.interface';
import { instance } from '../const/instance';

const setToken = (token?: string) => {
  if (token) {
    return (instance.defaults.headers.Authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credential: IRegisterUser, thunkApi) => {
    try {
      const res = await instance.post('/user/signup', {
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

export const login = createAsyncThunk('auth/login', async (credential: ILoginUser, thunkApi) => {
  try {
    const res = await instance.post('/user/signin', {
      email: credential.email,
      password: credential.password,
    });
    setToken(res.data.accessToken);
    return res.data;
  } catch (error: unknown) {
    if (error instanceof Error) return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await instance.post('user/logout');
    setToken();
  } catch (error: unknown) {
    if (error instanceof Error) return thunkApi.rejectWithValue(error.message);
  }
});
