import { switchLanguage } from '../Public/I18n';

export const chooseLanguage = data => dispatch => {
  switchLanguage(data);
  dispatch({ type: 'CHOOSE_LANGUAGE', payload: data });
};
