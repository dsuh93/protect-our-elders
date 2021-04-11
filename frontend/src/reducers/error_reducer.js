  
import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_error_reducer';

export default combineReducers({
  sessionError: SessionErrorsReducer,
});