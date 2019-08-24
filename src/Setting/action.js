export const chooseLanguage = (data) => (dispatch) => {
  dispatch({ type: 'CHOOSE_LANGUAGE', payload: data });
};
