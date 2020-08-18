import { ADD_CONTENT, CHOICE_LESSON, ADD_QUESTION } from './constants';

const initialState = {
  courseID: '',
  name: '',
  content: '',
  example: '',
  exercises: {
    lesson: '',
    questions: [],
  },
};

export default function Staff(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTENT:
      return { ...state, content: action.payload };
    case CHOICE_LESSON:
      return {
        ...state,
        exercises: { ...state.exercises, lesson: action.payload },
      };
    case ADD_QUESTION:
      return {
        ...state,
        exercises: {
          ...state.exercises,
          questions: [...state.exercises.questions, action.payload],
        },
      };
    case 'SAVE_COURSE_ID':
      return { ...state, courseID: action.payload };
    default:
      return { ...state };
  }
}
