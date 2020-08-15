import Api from '../../config/axious';
import { USER, COURSE } from './constant';

export const UserFindMe = async () => {
  try {
    const { data } = await Api.get(USER);
    return data;
  } catch (err) {
    throw err;
  }
};

export const GetAllCourses = async () => {
  try {
    const { data } = await Api.get(COURSE);
    return data;
  } catch (err) {
    throw err;
  }
};
