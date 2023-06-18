import { ReactComponent as FailIcon } from '../../images/fail-icon.svg';
import { ReactComponent as SuccessIcon } from '../../images/success-icon.svg';
import './InfoTooltip.scss';

type InfoTooltipProps = {
  isOpen: boolean;
  onClose: React.MouseEventHandler;
  tooltipSuccess: boolean;
};
export default function InfoTooltip(props: InfoTooltipProps) {
  const { isOpen, onClose, tooltipSuccess } = props;

  return (
    <section className={`popup ${isOpen && 'popup_type_opened'}`}>
      {tooltipSuccess ? (
        <div className='popup__container'>
          <h2 className='popup__title'>Форма успешно отправлена</h2>
          <SuccessIcon className='popup__icon' />
          <button className='popup__close-btn' type='button' onClick={onClose}>
            На главную
          </button>
        </div>
      ) : (
        <div className='popup__container'>
          <div className='popup__header'>
            <h2 className='popup__title popup__title_type_error'>Ошибка</h2>
            <button className='popup__btn-x' type='button' onClick={onClose} />
          </div>
          <FailIcon className='popup__icon popup__icon_type_error' />
          <button
            className='popup__close-btn popup__close-btn_type_error'
            type='button'
            onClick={onClose}
          >
            Закрыть
          </button>
        </div>
      )}
    </section>
  );
}
