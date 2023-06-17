import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { StepProps, Step3FormData } from '../../../../utils/constants';
import { step3Schema } from '../../../../utils/validation';
import { useAppDispatch, useAppSelector } from '../../../../utils/reduxHook';
import { setStep3Fields } from './step3Slice';

export default function Step3({ prevStep }: StepProps) {
  const step3State = useAppSelector((state) => state.step3Fields.step3);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm<Step3FormData>({
    mode: 'onTouched',
    defaultValues: step3State,
    resolver: yupResolver(step3Schema),
  });

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    dispatch(setStep3Fields(data));
  });

  function handleClickBack() {
    const values = getValues();
    dispatch(setStep3Fields(values));
    prevStep();
  }

  return (
    <form className='form' name='mainForm' onSubmit={onSubmit} noValidate>
      <label className='form__label' htmlFor='field-about'>
        About
      </label>
      <textarea
        className='form__textarea'
        {...register('about')}
        name='about'
        id='field-about'
        placeholder='Расскажите о себе'
        maxLength={200}
        required
      />
      <div>
        {errors.about && (
          <span className='form__error form__error_with_counter'>{errors.about?.message}</span>
        )}
        <span className='form__counter'> {watch('about').length}/200</span>
      </div>
      <div className='form__container'>
        <button
          className='form__btn form__btn_type_back'
          type='button'
          onClick={handleClickBack}
          id='button-back'
        >
          Назад
        </button>
        <button className='form__btn' type='submit' id='button-send'>
          Отправить
        </button>
      </div>
    </form>
  );
}
