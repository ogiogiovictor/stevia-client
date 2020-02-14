import { GET_SERVICES, SERVICE_ERROR, ADD_SERVICE, DELETE_SERVICE, GET_COACH_SERVICES } from '../actions/types';

const initialState = {
  services: [],
  coachservices: [],
  service: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SERVICES:
      return {
        ...state,
        services: payload,
        loading: false
      };
    case GET_COACH_SERVICES:
      return {
        ...state,
        coachservices: payload,
        loading: false
      };
      case ADD_SERVICE:
        return {
          ...state,
          services: [...state.services, payload],
          loading: false
        };
    case DELETE_SERVICE:
      return {
        ...state,
        loading: false
      };
    case SERVICE_ERROR:
      return {
        ...state,
        services: payload,
        loading: false
      };
    default:
      return state;
  }
}
