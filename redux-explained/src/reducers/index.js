import { combineReducers } from 'redux';
// Actions
import { getReducer } from './getReducer';
import { postReducer } from './postReducer';
import { putDelReducer } from './putDelReducer';


export const rootReducer = combineReducers({
  getReducer,
  postReducer,
  putDelReducer
});