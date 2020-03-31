import { POST_JOBS, VIEW_JOBS, JOBS_ERROR } from "../actions/types";

const initialState = {
    jobs: [],
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
        jobs: [...state.services, payload],
        loading: false
      };
    case VIEW_JOBS:
      return {
        ...state,
        jobs: payload,
        loading: false
      };
      case JOBS_ERROR:
        return {
          ...state,
          error: payload,
          jobs: [],
          loading: false
        };
      default:
        return state;
    }
}