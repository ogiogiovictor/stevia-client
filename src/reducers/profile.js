import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, GET_COACHES_PROFILE, COACH_AVAILABILITY, GET_COACHES_PROFILES_LAND, GET_STUDENTS_PROFILE } from '../actions/types';

const initialState = {
  profile: null,
  coaches: [],
  coachesland: [],
  loading: true,
  coachavailability: {},
  student: null,
  error: {},
  role: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case GET_COACHES_PROFILE:
      return {
        ...state,
        coaches: payload,
        loading: false,
      };
    case GET_STUDENTS_PROFILE:
      return {
        ...state,
        student: payload,
        loading: false,
      };
    case GET_COACHES_PROFILES_LAND:
      return {
        ...state,
        coachesland: payload,
        loading: false,
      };
    case COACH_AVAILABILITY:
      return {
        ...state,
        coachavailability: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        coaches: [],
        isAuthenticated: false,
        loading: false
      }
    default:
      return state;
  }
}
