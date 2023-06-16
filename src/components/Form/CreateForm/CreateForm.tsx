import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import './CreateForm.scss';
import Stepper from '../../Stepper/Stepper';

export default function CreateForm() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  function prevStep() {
    if (currentStep === 1) {
      navigate('/', { replace: true });
    } else {
      setCurrentStep(currentStep - 1);
    }
  }

  return (
    <main className='create'>
      <Stepper currentStep={currentStep} />
      {currentStep === 1 && <Step1 prevStep={prevStep} nextStep={nextStep} />}
      {currentStep === 2 && <Step2 prevStep={prevStep} nextStep={nextStep} />}
      {currentStep === 3 && <Step3 prevStep={prevStep} nextStep={nextStep} />}
    </main>
  );
}
