import { createSlice } from '@reduxjs/toolkit';

type Step1FormData = {
  nickname: string;
  name: string;
  sername: string;
  sex: string;
};

type initData = {
  step1: Step1FormData;
};
const initialState: initData = {
  step1: {
    nickname: '',
    name: '',
    sername: '',
    sex: '',
  },
};

const step1Slice = createSlice({
  name: 'step1Fields',
  initialState,
  reducers: {
    setStep1Fields(state, action) {
      state.step1 = action.payload;
    },
  },
});

export const { setStep1Fields } = step1Slice.actions;

export default step1Slice.reducer;
