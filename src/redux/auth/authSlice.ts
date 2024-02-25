import { createSlice } from '@reduxjs/toolkit';
import { login, logOut } from './operations';

export interface IUser {
  username: string | null;
}

export interface IAuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  isError: string | null;
}

const initialState: IAuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  isError: null,
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
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = {
          username: action.payload.username,
        };
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.isError = action.payload.errorMessage;
        }
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.isAuth = false;
        state.user = {} as IUser;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.isError = action.payload.errorMessage;
        }
      });
  },
});

export const { refreshUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
