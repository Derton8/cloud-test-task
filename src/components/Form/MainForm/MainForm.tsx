import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { withHookFormMask } from 'use-mask-input';
import { INIT_DATA } from '../../../utils/constants';
import { mainSchema } from '../../../utils/validation';
import { useNavigate } from 'react-router-dom';

export default function MainForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched', defaultValues: INIT_DATA, resolver: yupResolver(mainSchema) });

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    navigate('/create', {
      replace: true,
    });
  });

  return (
    <form className='form' name='mainForm' onSubmit={onSubmit} noValidate>
      <label className='form__label' htmlFor='field-phone'>
        Номер телефона
      </label>
      <input
        className='form__input'
        {...withHookFormMask(register('phone'), ['+7 (999) 999-99-99'])}
        type='tel'
        name='phone'
        id='field-phone'
        placeholder='+7 999 999-99-99'
        required
        disabled
      />
      {errors.phone && (
        <span className='form__error form-error-phone'>{errors.phone?.message}</span>
      )}
      <label className='form__label' htmlFor='field-email'>
        Email
      </label>
      <input
        className='form__input'
        {...register('email')}
        type='email'
        name='email'
        id='field-email'
        placeholder='tim.jennings@example.com'
        required
        disabled
      />
      {errors.email && (
        <span className='form__error form-error-email'>{errors.email?.message}</span>
      )}
      <button className='form__btn' type='submit'>
        Начать
      </button>
    </form>
  );
}
