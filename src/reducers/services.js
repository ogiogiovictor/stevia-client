import { GET_SERVICES, SERVICE_ERROR, ADD_SERVICE, DELETE_SERVICE, GET_COACH_SERVICES, BOOK_A_COACH, GET_PAYSTACK_OBJECT, GET_COACH_APPOINTMENTS } from '../actions/types';

const initialState = {
  services: [],
  coachservices: [],
  service: null,
  paystack: {},
  bookings: null,
  appointments: null,
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
    case BOOK_A_COACH:
      return {
        ...state,
        bookings: payload,
        loading: false
      };
    case GET_PAYSTACK_OBJECT:
      return {
        ...state,
        paystack: payload,
        loading: false
      };
    case GET_COACH_APPOINTMENTS:
      return {
        ...state,
        appointments: payload,
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
