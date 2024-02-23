import { RootState } from '../store';

export const getAuthState = (state: RootState) => state.auth;
export const getisAuth = (state: RootState) => state.auth.isAuth;
