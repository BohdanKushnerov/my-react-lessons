import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
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

export const login = createAsyncThunk<
  IUserData,
  ICredentials,
  { rejectValue: IMyKnownError }
>('auth/login', async (credentials, thunkAPI) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = await axios.get('/users.json');
    const mockUser = response.data.find(
      (user: IUserData) =>
        user.username === credentials.username &&
        user.password === credentials.password
    );

    if (mockUser) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('username', mockUser.username);

      return mockUser;
    } else {
      return thunkAPI.rejectWithValue({
        errorMessage: 'No this user data',
      });
    }
  } catch (error) {
    console.log('error', error);
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue({
        errorMessage: error.message,
      });
    }
  }
});

export const logOut = createAsyncThunk<
  {},
  void,
  { rejectValue: IMyKnownError }
>('auth/logOut', async (_, thunkAPI) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    localStorage.removeItem('auth');
    localStorage.removeItem('username');
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue({
        errorMessage: error.message,
      });
    }
  }
});
