import { SELECT_LANGUAGE } from "../actions/language_actions";

const LanguageReducer = (state = 'English', action) => {
  switch (action.type) {
    case SELECT_LANGUAGE:
      return action.language;
    default:
      return state;
  }
};

export default LanguageReducer;
