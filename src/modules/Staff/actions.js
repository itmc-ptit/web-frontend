import Api from '../../config/axious';
import { COURSE, ADD_CONTENT, ADD_QUESTION, CHOICE_LESSON } from './constants';

export const AddContent = (content) => async (dispatch) => {
  dispatch({ type: ADD_CONTENT, payload: content });
};

export const ChoiceLesson = (id) => async (dispatch) => {
  dispatch({ type: CHOICE_LESSON, payload: id });
};

export const AddQuestion = (question) => async (dispatch) => {
  dispatch({ type: ADD_QUESTION, payload: question });
};
//===================== API ===================
export const GetCourse = async () => {
  try {
    const { data } = await Api.get(COURSE);
    return data;
  } catch (err) {
    throw err;
  }
};
export const GetAllLessons = async (courseID) => {
  try {
    const { data } = await Api.get(`${COURSE}/${courseID}/lesson`);
    return data;
  } catch (err) {
    throw err;
  }
};
export const PostLesson = async (courseID, value) => {
  try {
    const { data } = await Api.post(`${COURSE}/${courseID}/lesson`, value);
    return data;
  } catch (err) {
    throw err;
  }
};
export const UpdateLesson = async (courseID, lessonId, value) => {
  try {
    const { data } = await Api.put(
      `${COURSE}/${courseID}/lesson/${lessonId}`,
      value
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export const GetLesson = async (courseID, lessonID) => {
  try {
    const { data } = await Api.get(`${COURSE}/${courseID}/lesson/${lessonID}`);
    return data;
  } catch (err) {
    throw err;
  }
};
