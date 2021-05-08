import { combineReducers } from 'redux';
import languageReducer from './language_reducer';


const uiReducer = combineReducers({
    language: languageReducer,
});


export default uiReducer;