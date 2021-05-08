import { SELECT_LANGUAGE } from "../actions/language_actions";

// const _defaultSession = {
//   language: 'English'
// };

const LanguageReducer = (state = 'English', action) => {
  // Object.freeze(state);

  switch (action.type) {
    case SELECT_LANGUAGE:
      return action.language;
    default:
      return state;
  }
};

export default LanguageReducer;
