import { createSlice } from '@reduxjs/toolkit';

type Step3FormData = {
  about: string;
};

type initData = {
  step3: Step3FormData;
};

const initialState: initData = {
  step3: {
    about: '',
  },
};

const step3Slice = createSlice({
  name: 'step3Fields',
  initialState,
  reducers: {
    setStep3Fields(state, action) {
      state.step3 = action.payload;
    },
  },
});

export const { setStep3Fields } = step3Slice.actions;

export default step3Slice.reducer;
