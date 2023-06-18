import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { StepProps } from '../../../../utils/constants';
import { step3Schema } from '../../../../utils/validation';
import { useAppDispatch, useAppSelector } from '../../../../utils/reduxHook';
import { Step3FormData, setStep3Fields, resetStore as resetStep3 } from './step3Slice';
import { resetStore as resetStep1 } from '../Step1/step1Slice';
import { resetStore as resetStep2 } from '../Step2/step2Slice';
import { resetStore as resetMain } from '../../MainForm/mainFormSlice';
import { useMemo, useState } from 'react';
import InfoTooltip from '../../../InfoTooltip/InfoTooltip';
import { useFormSubmit } from '../../../../utils/useFormSubmit';
import { useNavigate } from 'react-router-dom';

export default function Step3({ prevStep }: StepProps) {
  const step3State = useAppSelector((state) => state.step3Fields.step3);
  const isSuccess = useAppSelector((state) => state.step3Fields.success);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

  const resets = [resetMain, resetStep1, resetStep2, resetStep3];
  const { submitForm } = useFormSubmit();

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

  const onSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        const cloneData = { ...data };
        dispatch(setStep3Fields(cloneData));
        submitForm(cloneData)
          .then((response) => {
            if (response.type === 'step3Fields/sendFormData/rejected') {
              setIsInfoTooltipOpen(true);
              return console.log('There was an error', response);
            }
            setIsInfoTooltipOpen(true);
          })
          .catch((err: any) => {
            console.log('Submit failed', err);
          });
      }),
    [dispatch, handleSubmit, submitForm]
  );

  function handleClickBack() {
    const values = getValues();
    dispatch(setStep3Fields(values));
    prevStep();
  }

  function closeInfoTooltip() {
    if (isSuccess) {
      resets.forEach((reset) => dispatch(reset()));
      navigate('/', { replace: true });
      setIsInfoTooltipOpen(false);
    } else {
      setIsInfoTooltipOpen(false);
    }
  }

  return (
    <>
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
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeInfoTooltip}
        tooltipSuccess={isSuccess}
      />
    </>
  );
}
