import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { withHookFormMask } from 'use-mask-input';
import { mainSchema } from '../../../utils/validation';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../utils/reduxHook';
import { setMainFields } from './mainFormSlice';
import { FC } from 'react';

const MainForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const main_state = useAppSelector((state) => state.mainFilelds.main);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    defaultValues: main_state,
    resolver: yupResolver(mainSchema),
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(setMainFields(data));
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
      {errors?.phone && <span className='form__error'>{errors?.phone?.message}</span>}
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
      {errors.email && <span className='form__error'>{errors.email?.message}</span>}
      <button className='form__btn' type='submit'>
        Начать
      </button>
    </form>
  );
};
export default MainForm;
