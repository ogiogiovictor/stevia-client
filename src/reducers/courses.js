import { GET_COURSES, COURSE_ERROR,ADD_COURSE, ADD_VIDEOS } from '../actions/types';

const initialState = {
  courses: [],
  course: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COURSES:
      return {
        ...state,
        courses: payload,
        loading: false
      };
    case ADD_COURSE:
        return {
          ...state,
          courses: [...state.courses, payload],
          loading: false
        };
    case ADD_VIDEOS:
        return {
          ...state,
          courses: [...state.courses, payload],
          loading: false
        };
    case COURSE_ERROR:
      return {
        ...state,
        courses: payload,
        loading: false
      };
    default:
      return state;
  }
}
