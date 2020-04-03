import { POST_JOBS, VIEW_JOBS, JOBS_ERROR, ADD_COMPANY, GET_COMPANY, GET_JOB_CATEGORIES, CLEAR_JOBS, GET_JOBS_LANDING } from "../actions/types";

const initialState = {
    jobs: [],
    landjobs: [],
    companies: [],
    categories: [],
    jobtype: [],
    loading: true,
};

export default function(state = initialState, action) {
    const { type, payload } = action;

  switch (type) {
    case POST_JOBS:
      return {
        ...state,
        jobs: [...state.jobs, payload],
        loading: false
      };
    case VIEW_JOBS:
      return {
        ...state,
        jobs: payload,
        loading: false
      };
      case ADD_COMPANY:
        return {
          ...state,
          companies: [...state.companies, payload],
          loading: false
        };
        case GET_COMPANY:
          return {
            ...state,
            companies: payload,
            loading: false
          };
        case GET_JOB_CATEGORIES:
          return {
            ...state,
            categories: payload,
            loading: false
          };
        case GET_JOBS_LANDING:
          return {
            ...state,
            landjobs: payload,
            loading: false
          };
          case JOBS_ERROR:
            return {
              ...state,
              error: payload,
              loading: false,
              jobs: []
            };
          case CLEAR_JOBS:
            return {
              ...state,
              jobs: [],
              companies: [],
              loading: false
            };
      default:
        return state;
    }
}