import { Dispatch, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { RootState } from '../store';
// import data from 'public/users.json';

// console.log(data);

interface IUserData {
  username: string;
  password: string;
}

interface ICredentials {
  username: string;
  password: string;
}

interface IMyKnownError {
  errorMessage: string;
}

interface AsyncThunkConfig {
  state?: RootState;
  dispatch?: Dispatch;
  extra?: unknown;
}

export const login = createAsyncThunk<
  IUserData,
  ICredentials,
  AsyncThunkConfig
>('auth/login', async (credentials, thunkAPI) => {
  try {
    console.log(1);
    console.log('credentials', credentials);
    const response = await axios.get('/users.json');
    const mockUser = response.data.find(
      (user: IUserData) =>
        user.username === credentials.username &&
        user.password === credentials.password
    );

    if (mockUser) {
      return mockUser;
    } else {
      return thunkAPI.rejectWithValue({
        errorMessage: 'No this user data',
      } as IMyKnownError);
    }
  } catch (error) {
    console.log('error', error);
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue({
        errorMessage: error.message,
      } as IMyKnownError);
    }
  }
});

export const logOut = () => {
  //
};

export const refreshUser = () => {
  //
};
