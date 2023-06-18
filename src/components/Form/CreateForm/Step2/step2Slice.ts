import { createSlice } from '@reduxjs/toolkit';

export type Step2FormData = {
  advantages: {
    name: string;
  }[];
  checkbox: number[];
  radio: number;
};

type initData = {
  step2: Step2FormData;
};

const initialState: initData = {
  step2: {
    advantages: [{ name: '' }, { name: '' }, { name: '' }],
    checkbox: [],
    radio: 0,
  },
};

const step2Slice = createSlice({
  name: 'step2Fields',
  initialState,
  reducers: {
    setStep2Fields(state, action) {
      state.step2 = action.payload;
    },
    resetStore() {
      return initialState;
    },
  },
});

export const { setStep2Fields, resetStore } = step2Slice.actions;

export default step2Slice.reducer;
