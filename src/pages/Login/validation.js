import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required('Required'),
  password: yup.string().required('Required'),
});
