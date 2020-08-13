import Api from '../../config/axious';
import { LOGIN, SIGNUP, LOGIN_GOOGLE, USER } from './constants';

export const UserFindMe = async () => {
  try {
    const { data } = await Api.get(USER);
    return data;
  } catch (err) {
    throw err;
  }
};

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
