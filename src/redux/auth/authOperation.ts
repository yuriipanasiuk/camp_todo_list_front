/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginUser, IRegisterUser } from '../../interface/user.interface';
import { instance } from '../../const/instance';

const setToken = (token?: string) => {
  if (token) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.Authorization = '';
};

instance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && localStorage.getItem('refreshToken')) {
      const refreshToken = localStorage.getItem('refreshToken');

      instance.post('/user/refresh', { refreshToken }).then(response => {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
        instance(originalRequest)
          .then(response => {
            return response.data;
          })
          .catch(error => {
            console.log(error);
          });
      });
    } else {
      return Promise.reject(error.response.data);
    }
  }
);

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

    localStorage.setItem('refreshToken', res.data.refreshToken);
    localStorage.setItem('accessToken', res.data.accessToken);

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

export const getCurrentUser = createAsyncThunk('auth/current', async (_, thunkApi) => {
  try {
    const res = await instance.get('/user/current');
    return res.data;
  } catch (error: unknown) {
    if (error instanceof Error) return thunkApi.rejectWithValue(error.message);
  }
});
