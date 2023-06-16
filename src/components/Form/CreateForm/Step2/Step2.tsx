import { useForm, useFieldArray } from 'react-hook-form';
import { INIT_STEP2_DATA, Step2FormData, StepProps } from '../../../../utils/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { step2Schema } from '../../../../utils/validation';

export default function Step2({ prevStep, nextStep }: StepProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2FormData>({
    mode: 'onTouched',
    defaultValues: INIT_STEP2_DATA,
    resolver: yupResolver(step2Schema),
  });

  const onSubmit = handleSubmit((data: Step2FormData) => {
    const advantages = data.advantages.map((field) => field.name);
    const checkbox = data.checkboxes.map((field) => +field);
    const radio = +data.radio;

    alert(JSON.stringify({ advantages, checkbox, radio }));
    nextStep();
  });

  const { fields, append, remove } = useFieldArray({
    name: 'advantages',
    control,
  });

  return (
    <form className='form' name='mainForm' onSubmit={onSubmit} noValidate>
      <label className='form__label'>Advantages</label>
      <ul className='form__variants-container'>
        {fields.map((field, index, arr) => (
          <li className='form__adv' key={field.id}>
            <input
              className='form__input form__input_size_l'
              {...register(`advantages.${index}.name` as const, {
                required: true,
              })}
              defaultValue={field.name}
              type='text'
              id='field-advatages-1'
              placeholder='Advantage'
              required
            />
            <button
              className='form__delete-icon'
              type='button'
              onClick={() => remove(index)}
              disabled={arr.length === 1}
              id={`button-remove-${index + 1}`}
            />
            {errors.advantages?.[index]?.name?.message && (
              <span className='form__error'>{errors.advantages?.[index]?.name?.message}</span>
            )}
          </li>
        ))}
      </ul>
      <button
        className='form__add-btn'
        type='button'
        id='button-add'
        onClick={() =>
          append({
            name: '',
          })
        }
      />
      <label className='form__label form__label_type_group'>Checkbox group</label>
      <ul className='form__variants-container'>
        <li className='form__variant-row'>
          <input
            className='form__checkbox'
            {...register('checkboxes')}
            type='checkbox'
            name='checkboxes'
            id='field-checkbox-group-option-1'
            placeholder='Name'
            value={1}
          />
          <label className='form__checkbox-label' htmlFor='field-checkbox-group-option-1'>
            1
          </label>
        </li>
        <li className='form__variant-row'>
          <input
            className='form__checkbox'
            {...register('checkboxes')}
            type='checkbox'
            name='checkboxes'
            id='field-checkbox-group-option-2'
            placeholder='Name'
            value={2}
          />
          <label className='form__checkbox-label' htmlFor='field-checkbox-group-option-2'>
            2
          </label>
        </li>
        <li className='form__variant-row'>
          <input
            className='form__checkbox'
            {...register('checkboxes')}
            type='checkbox'
            name='checkboxes'
            id='field-checkbox-group-option-3'
            placeholder='Name'
            value={3}
          />
          <label className='form__checkbox-label' htmlFor='field-checkbox-group-option-3'>
            3
          </label>
        </li>
      </ul>

      {errors.checkboxes && <span className='form__error'>{errors.checkboxes?.message}</span>}
      <label className='form__label form__label_type_group'>Radio group</label>
      <ul className='form__variants-container'>
        <li className='form__variant-row'>
          <input
            className='form__radio'
            {...register('radio')}
            type='radio'
            name='radio'
            id='field-radio-group-option-1'
            value={1}
          />
          <label className='form__checkbox-label' htmlFor='field-radio-group-option-1'>
            1
          </label>
        </li>
        <li className='form__variant-row'>
          <input
            className='form__radio'
            {...register('radio')}
            type='radio'
            name='radio'
            id='field-radio-group-option-2'
            value={2}
          />
          <label className='form__checkbox-label' htmlFor='field-radio-group-option-2'>
            2
          </label>
        </li>
        <li className='form__variant-row'>
          <input
            className='form__radio'
            {...register('radio')}
            type='radio'
            name='radio'
            id='field-radio-group-option-3'
            value={3}
          />
          <label className='form__checkbox-label' htmlFor='field-radio-group-option-3'>
            3
          </label>
        </li>
      </ul>
      {errors.radio && <span className='form__error'>{errors.radio?.message}</span>}
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
