import Api from '../../config/axious';
import { LOGIN, SIGNUP } from './constants';

export const Login = async (values) => {
  try {
    const { data } = await Api.post(LOGIN, values);
    return data;
  } catch (err) {
    throw err;
  }
};

export const Signup = async (values) => {
  try {
    const { data } = await Api.post(SIGNUP, values);
    return data;
  } catch (err) {
    throw err;
  }
};

export const handleAfterLogin = (data) => {
  localStorage.setItem('accessToken', data.accessToken);
  window.location.reload(false);
};
