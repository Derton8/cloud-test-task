export type StepProps = {
  prevStep: () => void;
  nextStep: () => void;
};

type FormData = {
  phone: string;
  email: string;
};

export const INIT_DATA: FormData = {
  phone: '+7 (978) 829-93-86',
  email: 'danil.mysenko@yandex.ru',
};

type Step1FormData = {
  nickname: string;
  name: string;
  sername: string;
  sex: string;
};

export const INIT_STEP1_DATA: Step1FormData = {
  nickname: '',
  name: '',
  sername: '',
  sex: '',
};

export type Step2FormData = {
  advantages: {
    name: string;
  }[];
  checkboxes: number[];
  radio: number;
};

export const INIT_STEP2_DATA: Step2FormData = {
  advantages: [{ name: '' }, { name: '' }, { name: '' }],
  checkboxes: [],
  radio: 0,
};

export type Step3FormData = {
  about: string;
};

export const INIT_STEP3_DATA: Step3FormData = {
  about: '',
};
