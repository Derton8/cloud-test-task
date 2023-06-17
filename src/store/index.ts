import { configureStore } from '@reduxjs/toolkit';
import mainFormReducer from '../components/Form/MainForm/mainFormSlice';
import step1Reducer from '../components/Form/CreateForm/Step1/step1Slice';
import step2Reducer from '../components/Form/CreateForm/Step2/step2Slice';
import step3Reducer from '../components/Form/CreateForm/Step3/step3Slice';

const store = configureStore({
  reducer: {
    mainFilelds: mainFormReducer,
    step1Fields: step1Reducer,
    step2Fields: step2Reducer,
    step3Fields: step3Reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
