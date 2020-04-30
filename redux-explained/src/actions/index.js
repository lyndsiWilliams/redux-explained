// Axios
import axios from 'axios';
// Destructure the command names to avoid typos in the reducer
export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";


// Create a descriptive action name for this function
export const getUsers = () => {
  return dispatch => {

    dispatch({ type: FETCH_USERS_START })
  }
}