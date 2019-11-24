import { switchLanguage } from '../../I18n';

export const CHOOSE_LANGUAGE = 'CHOOSE_LANGUAGE';

export const chooseLanguage = data => dispatch => {
  switchLanguage(data);
  dispatch({ type: CHOOSE_LANGUAGE, payload: data });
};
