import { useForm } from 'react-hook-form';
import { INIT_STEP1_DATA } from '../../../../utils/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { step1Schema } from '../../../../utils/validation';
import { StepProps } from '../../../../utils/constants';

export default function Step1({ prevStep, nextStep }: StepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: 'onTouched',
    defaultValues: INIT_STEP1_DATA,
    resolver: yupResolver(step1Schema),
  });

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    console.log(getValues());
    nextStep();
  });

  return (
    <form className='form' name='mainForm' onSubmit={onSubmit} noValidate>
      <label className='form__label' htmlFor='field-nickname'>
        Nickname
      </label>
      <input
        className='form__input form__input_size_l'
        {...register('nickname')}
        type='text'
        name='nickname'
        id='field-nickname'
        placeholder='Nickname'
        maxLength={30}
        required
      />
      {errors.nickname && <span className='form__error'>{errors.nickname?.message}</span>}
      <label className='form__label' htmlFor='field-name'>
        Name
      </label>
      <input
        className='form__input form__input_size_l'
        {...register('name')}
        type='text'
        name='name'
        id='field-name'
        placeholder='Name'
        maxLength={50}
        required
      />
      {errors.name && <span className='form__error'>{errors.name?.message}</span>}
      <label className='form__label' htmlFor='field-sername'>
        Surname
      </label>
      <input
        className='form__input form__input_size_l'
        {...register('sername')}
        type='text'
        name='sername'
        id='field-sername'
        placeholder='Surname'
        maxLength={50}
        required
      />
      {errors.sername && <span className='form__error'>{errors.sername?.message}</span>}
      <label className='form__label' htmlFor='field-sex'>
        Sex
      </label>
      <select
        className='form__input form__input_size_l form__input_type_select'
        {...register('sex')}
        name='sex'
        id='field-sex'
        placeholder='sex'
        required
      >
        <option value='' disabled hidden>
          Не выбрано
        </option>
        <option className='form__option'>man</option>
        <option className='form__option'>woman</option>
      </select>
      {errors.sex && <span className='form__error'>{errors.sex?.message}</span>}
      <div className='form__container'>
        <button
          className='form__btn form__btn_type_back'
          type='button'
          onClick={prevStep}
          id='button-back'
        >
          Назад
        </button>
        <button className='form__btn' type='submit' id='button-next'>
          Далее
        </button>
      </div>
    </form>
  );
}