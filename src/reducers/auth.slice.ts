import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IStore } from '../types';

const initialState = {
  birthDate: null,
  username: null, // drop
} as IStore['auth'];

export const authSlice = createSlice({
  extraReducers: () => {},
  initialState,
  name: 'auth',
  reducers: {
    clearAuthData(state: IStore['auth']) {
      state.birthDate = null;
      state.username = null;
    },
    setBirthDate(state: IStore['auth'], action: PayloadAction<string | null>) {
      state.birthDate = action.payload;
    },
    setUsername(state: IStore['auth'], action: PayloadAction<string | null>) {
      state.username = action.payload;
    },
  },
});

export const { setUsername, setBirthDate, clearAuthData } = authSlice.actions;
