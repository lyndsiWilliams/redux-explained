import {
  EDIT_USER,
  DELETE_USER
} from '../actions';

const initialState = {
  user: [],
  error: "",
  isFetching: false
};


export function putDelReducer(state=initialState, action) {
  switch(action.type) {
    case EDIT_USER:
      const uneditedUsers = state.user.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        user: [...uneditedUsers, action.payload.editedUser]
      }
    case DELETE_USER:
      return {
        ...state,
        user: state.user.filter(item => item.id !== action.payload),
        error: "",
        isFetching: false
      }
    default:
      return state;
  };
};