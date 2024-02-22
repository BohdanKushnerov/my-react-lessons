import { createSlice } from '@reduxjs/toolkit';
import { login } from './operations';

export interface IUser {
  username: string | null;
  password: string | null;
}

export interface IAuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  isError: boolean;
}

const initialState: IAuthState = {
  isAuth: false,
  user: {
    username: null,
    password: null,
  },
  isLoading: false,
  isError: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = {
          username: action.payload.username,
          password: action.payload.password,
        };
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(login.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const authReducer = authSlice.reducer;
