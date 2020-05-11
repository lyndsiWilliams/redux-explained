// A reducer is a fancy switch statement that takes in the current state, makes a change (using an action), and spits out a NEW INSTANCE of the state. 

// Import the destructured action command names to avoid typos
import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from '../actions';

// Create your initial state. This is your "start" state, a blank slate ready for information to be loaded onto it. Make sure the data in your initial state matches the data you'll be loading onto it - 'users' needs a blank array to load the array of user objects, 'error' needs a blank string to return an error string, 'isFetching' is a boolean and it needs to be set in the "starting" state (false)
const initialState = {
  users: [],
  error: "",
  isFetching: false
};


// Now for our fancy switch statement! Remember: A reducer is a function that takes in (state, action) as parameters. You'll go ahead and set the state in the parameter to the initialState object you created above.
// Create a descriptive reducer name for this function
export function getReducer(state=initialState, action) {
  // The switch statement will be determining the case by looking at the action type
  switch (action.type) {
    // Case 1: Start! This takes in the current state, returns no error, and notifies us that the action has begun the fetching process (axios.get) by updating 'isFetching' to true
    case FETCH_USERS_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    // Case 2: Success! This takes in the current state, returns no error, 'isFetching' is now false because it is done fetching the data, and the users array is loaded with the user objects through the action's success payload
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        users: action.payload
      };
    // Case 3: Uh oh, failure! This takes in the current state, loads the error onto 'error' from the action's failure payload, and 'isFetching' is now false since there was an error and the data is not being fetched
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    // If none of the cases are triggered in this reducer, it will return the state untouched
    default:
      return state;
  };
};