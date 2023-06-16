import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { INIT_STEP3_DATA, StepProps, Step3FormData } from '../../../../utils/constants';
import { step3Schema } from '../../../../utils/validation';

export default function Step3({ prevStep }: StepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Step3FormData>({
    mode: 'onTouched',
    defaultValues: INIT_STEP3_DATA,
    resolver: yupResolver(step3Schema),
  });

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

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
          onClick={prevStep}
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
