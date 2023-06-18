import { createSlice } from '@reduxjs/toolkit';

type mainFields = {
  phone: string;
  email: string;
};

export type main = {
  main: mainFields;
};

const initialState: main = {
  main: {
    phone: '+7 (978) 829-93-86',
    email: 'danil.mysenko@yandex.ru',
  },
};

const mainFormSlice = createSlice({
  name: 'mainFields',
  initialState,
  reducers: {
    setMainFields(state, action) {
      state.main = action.payload;
    },
    resetStore() {
      return initialState;
    },
  },
});

export const { setMainFields, resetStore } = mainFormSlice.actions;

export default mainFormSlice.reducer;
