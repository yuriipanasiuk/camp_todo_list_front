import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

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
        state.user.name = action.payload?.name ?? '';
        state.user.email = action.payload?.email ?? '';
        state.isRegister = true;
      })
      .addCase(register.rejected, state => {
        state.isLoggedIn = false;
        state.isRegister = false;
      }),
});

export const authReducer = authSlice.reducer;
