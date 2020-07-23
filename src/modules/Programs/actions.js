import API from '../../config/compiler';
import { SUBMISSION } from './constants';

export const SubmitReq = async (body) => {
  try {
    const { data } = await API.post(`${SUBMISSION}`, body);
    return data;
  } catch (err) {
    throw err;
  }
};

export const GetSubmit = async (token) => {
  try {
    const { data } = await API.get(
      `${SUBMISSION}/${token}?base64_encoded=false`
    );
    return data;
  } catch (err) {
    throw err;
  }
};
