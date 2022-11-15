import * as yup from 'yup';

export const ArtistSchema = yup.object().shape({
  soundcloud: yup.string().required('Required'),
  username: yup.string().required('Required'),
  email: yup.string().email().required('Required'),
  twitter: yup.string().required('Required'),
  address: yup.string().required('Required'),
  soundxyz: yup.string().required('Required'),
});