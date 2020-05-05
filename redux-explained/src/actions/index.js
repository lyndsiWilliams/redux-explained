// Axios
import axios from 'axios';
// Destructure the command names to avoid typos in the reducer
export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";


// Create a descriptive action name for this function
export const getUsers = () => {
  // Initial dispatch initiates the action - DISPATCH = ACTION GO!
  return dispatch => {
    // dispatch always has a type and sometimes a payload. Payload is an object that holds the information that will update the state. Dispatch types are "described" in the reducer. The reducer tells the action what to do with the payload by matching up the type.
    // FETCH_USERS_START begins the action by taking in the current state (not updated yet) and begin to attempt fetching the data (axios call)
    dispatch({ type: FETCH_USERS_START });
    axios.get("https://reqres.in/api/users?page=2")
      .then(response => {
        // If successful, the data is loaded onto the users array in the state
        dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data.data });
      })
      .catch(error => {
        console.log(error);
        // If failed, the error is loaded onto the error string in the state
        dispatch({ type: FETCH_USERS_FAILURE, payload: error });
      });
  };
};