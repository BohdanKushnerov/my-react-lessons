import { createSlice } from '@reduxjs/toolkit';
import { login } from './operations';

export interface IUser {
  username: string | null;
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
  },
  isLoading: false,
  isError: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    refreshUser: state => {
      const isAuth = localStorage.getItem('auth');
      const mockUser = localStorage.getItem('username');

      if (isAuth && mockUser) {
        state.isAuth = true;
        state.user = {
          username: mockUser,
        };
      }
    },
    logOut: state => {
      localStorage.removeItem('auth');
      localStorage.removeItem('username');

      state.isAuth = false;
      state.user = {
        username: null,
      };
    },
  },
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

export const { refreshUser, logOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
