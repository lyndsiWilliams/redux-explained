import {
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE
} from '../actions';

const initialState = {
  user: [],
  error: "",
  isFetching: false
};


export function postReducer(state=initialState, action) {
  switch(action.type) {
    case ADD_USER_START:
      return {
        ...state,
        isFetching: true
      }
    case ADD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false
      }
    case ADD_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state;
  };
};