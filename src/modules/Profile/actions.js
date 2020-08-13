import Api from '../../config/axious';
import { PROFILE } from './constants';

export const UserUpdateProfile = async (inputData) => {
  try {
    const { data } = await Api.put(PROFILE, inputData);
    return data;
  } catch (err) {
    throw err;
  }
};

export const UserFindMe = async () => {
  try {
    const { data } = await Api.get(PROFILE);
    return data;
  } catch (err) {
    throw err;
  }
};
