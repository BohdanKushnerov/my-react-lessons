import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  '/auth/register',
  async credentials => {
    try {
      const response = await axios.post('/users/signup', credentials);
      token.set(response.data.token);
      console.log(response);
      return response.data;
    } catch (error) {}
  }
);

export const signIn = createAsyncThunk('/auth/signin', async credentials => {
  try {
    const response = await axios.post('/users/login', credentials);
    token.set(response.data.token);
    console.log(response);
    return response.data;
  } catch (error) {}
});

export const logOut = createAsyncThunk('/auth/logout', async () => {
  try {
    const response = await axios.post('/users/logout');
    token.unset(response.data.token);
    console.log(response);
    return response.data;
  } catch (error) {}
});

export const refetch = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  // console.log(thunkAPI);
  const state = thunkAPI.getState();
  // const persistedToken = state.token;
  const persistedToken = state.auth.token;

  console.log('state', state);
  console.log('persistedToken', persistedToken);

  if (persistedToken === null) {
    console.log('Токена нет, уходим из fetchCurrentUser');
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});
