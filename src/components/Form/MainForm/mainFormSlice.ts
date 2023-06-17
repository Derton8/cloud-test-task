import { createSlice } from '@reduxjs/toolkit';

type mainFields = {
  phone: string;
  email: string;
};

type main = {
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
    // resetStore() {
    //   return initialState;
    // },
    setMainFields(state, action) {
      state.main = action.payload;
    },
    // getFields(state) {
    //   return state;
    // },
  },
});

export const { setMainFields } = mainFormSlice.actions;

export default mainFormSlice.reducer;
