import * as yup from 'yup';

const emailRegex = new RegExp(
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export const userSchema = yup.object({
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
