import { Fragment } from 'react';
import './Stepper.scss';

interface StepperProps {
  currentStep: number;
}

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className='stepper'>
      {[...new Array(3)].map((_, i) => (
        <Fragment key={i}>
          {i === 0 ? null : <div className={`line ${i < currentStep ? 'line__filled' : ''}`} />}
          <div
            className={`circle ${i === currentStep - 1 ? 'circle__current' : ''} ${
              i < currentStep - 1 ? 'circle__done' : ''
            } `}
          >
            <span
              className={`step ${i < currentStep ? 'step__done' : ''} ${
                i === currentStep - 1 ? 'step__current' : ''
              }`}
            >
              {i + 1}
            </span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
