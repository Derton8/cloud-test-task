import { sendFormData } from '../components/Form/CreateForm/Step3/step3Slice';
import { useAppDispatch, useAppSelector } from './reduxHook';

export const useFormSubmit = () => {
  const dispatch = useAppDispatch();
  const allValues = useAppSelector((state) => ({
    ...state.mainFilelds.main,
    ...state.step1Fields.step1,
    ...state.step2Fields.step2,
    ...state.step3Fields.step3,
    advantages: state.step2Fields.step2.advantages?.map((advent) => advent.name),
    checkbox: state.step2Fields.step2.checkbox?.map((ch) => +ch),
    radio: +state.step2Fields.step2.radio,
  }));

  const submitForm = (data: any) => {
    return dispatch(sendFormData({ ...allValues, ...data }));
  };

  return {
    submitForm,
  };
};
