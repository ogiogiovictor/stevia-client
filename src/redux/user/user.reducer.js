import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isFetching: false,
  errorMessage: undefined
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER_START:
      return {
        ...state,
        isFetching: true
      }
    case UserActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUser: action.payload
      };
    case UserActionTypes.FETCH_USER_FAILURE:
      return{
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;
