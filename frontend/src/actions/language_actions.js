export const SELECT_LANGUAGE = "RECEIVE_CURRENT_USER";

export const selectLanguage = (language) => ({
    type: SELECT_LANGUAGE,
    language
});