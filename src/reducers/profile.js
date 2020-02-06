import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, CLEAR_USER } from '../actions/types';

const initialState = {
  profile: null,
  coaches: [],
  loading: true,
  error: {}
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
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_PROFILE:
    case CLEAR_USER:
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
