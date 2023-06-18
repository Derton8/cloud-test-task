import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Step1FormData } from '../Step1/step1Slice';
import { Step2FormData } from '../Step2/step2Slice';
import { main } from '../../MainForm/mainFormSlice';
import { BASE_URL } from '../../../../utils/constants';

export type Step3FormData = {
  about: string;
};

type initData = {
  status: string | null;
  success: boolean;
  step3: Step3FormData;
};

export interface IFormValues
  extends Step1FormData,
    Omit<Step2FormData, 'advantages'>,
    Step3FormData,
    main {
  advantages: string[];
}

const initialState: initData = {
  status: null,
  success: false,
  step3: {
    about: '',
  },
};

export const sendFormData = createAsyncThunk(
  'step3Fields/sendFormData',
  async function (formValues: IFormValues, { rejectWithValue }) {
    try {
      const response = await fetch(`${BASE_URL}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(formValues),
      });
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error: any) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const step3Slice = createSlice({
  name: 'step3Fields',
  initialState,
  reducers: {
    setStep3Fields(state, action) {
      state.step3 = action.payload;
    },
    getAllFormValues(state) {
      return state;
    },
    resetStore() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendFormData.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(sendFormData.fulfilled, (state) => {
        return {
          ...state,
          status: 'resolved',
          success: true,
        };
      })
      .addCase(sendFormData.rejected, (state) => {
        return {
          ...state,
          status: 'rejected',
          success: false,
        };
      });
  },
});

export const { setStep3Fields, getAllFormValues, resetStore } = step3Slice.actions;

export default step3Slice.reducer;
