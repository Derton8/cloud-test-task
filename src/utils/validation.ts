import * as yup from 'yup';

const emailRegex = new RegExp(
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export const mainSchema = yup.object({
  phone: yup
    .string()
    .required('Необходимо ввести номер телефона')
    .test('sd', 'Недостаточная длина номера', (value) => {
      return !value.includes('_');
    }),
  email: yup
    .string()
    .trim()
    .required('Необходимо ввести email')
    .email('Введите email в формате tim.jennings@example.com')
    .matches(emailRegex, 'Введите email в формате tim.jennings@example.com'),
});

export const step1Schema = yup.object({
  nickname: yup
    .string()
    .trim()
    .required('Необходимо ввести nickname')
    .max(30, 'Максимальная длина 30 символов'),
  name: yup
    .string()
    .trim()
    .required('Необходимо ввести name')
    .max(50, 'Максимальная длина 50 символов'),
  sername: yup
    .string()
    .trim()
    .required('Необходимо ввести surname')
    .max(50, 'Максимальная длина 50 символов'),
  sex: yup.string().required().oneOf(['man', 'woman'], 'Выберите одно из значений'),
});

const advSchema = {
  name: yup
    .string()
    .trim()
    .required('Необходимо заполнить поле')
    .max(50, 'Максимальная длина 50 символов'),
};

export const step2Schema = yup.object({
  advantages: yup.array().of(yup.object().shape(advSchema)),
});

export const step3Schema = yup.object({
  about: yup
    .string()
    .trim()
    .required('Необходимо ввести данные о себе')
    .max(200, 'Максимальная длина 200 символов'),
});
