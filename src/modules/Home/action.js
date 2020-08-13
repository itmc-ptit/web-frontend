import Api from '../../config/axious';
import { USER } from './constant';

export const UserFindMe = async () => {
  try {
    const { data } = await Api.get(USER);
    return data;
  } catch (err) {
    throw err;
  }
};
