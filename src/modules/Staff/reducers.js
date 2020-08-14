import { ADD_CONTENT } from './constants';

const initialState = {
  name: '',
  content: '',
  example: '',
};

export default function Staff(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTENT:
      return { ...state, content: action.payload };
    default:
      return { ...state };
  }
}
