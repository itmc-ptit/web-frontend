import Api from '../../config/axious';

export const DetailLesson = async (courseId, lessonId) => {
  try {
    const { data } = await Api.get(`/course/${courseId}/lesson/${lessonId}`);
    return data;
  } catch (err) {
    throw err;
  }
};
