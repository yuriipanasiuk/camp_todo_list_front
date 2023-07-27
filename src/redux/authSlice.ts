import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, login, logout, register } from './authOperation';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    accessToken: '',
    isLoggedIn: false,
    isRefreshing: false,
    isRegister: false,
  },
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.isRegister = true;
      })
      .addCase(register.rejected, state => {
        state.isLoggedIn = false;
        state.isRegister = false;
      })
      .addCase(login.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(login.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(logout.pending, state => {
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoggedIn = false;
        state.user = { name: '', email: '' };
        state.accessToken = '';
      })
      .addCase(getCurrentUser.pending, state => {
        state.isRefreshing = true;
        state.isLoggedIn = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
      })
      .addCase(getCurrentUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      }),
});

export const authReducer = authSlice.reducer;
