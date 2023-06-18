export const BASE_URL = 'https://api.sbercloud.ru/content/v1/bootcamp/frontend';

export type StepProps = {
  prevStep: () => void;
  nextStep: () => void;
};
