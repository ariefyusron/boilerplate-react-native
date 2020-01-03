import { switchLanguage } from '../../I18n';

export const CHOOSE_LANGUAGE = 'CHOOSE_LANGUAGE';

type Params = {
  type: string;
  payload: object;
};
type Dispatch = (params: Params) => void;

export const chooseLanguage = (data: string) => (dispatch: Dispatch) => {
  switchLanguage(data);
  dispatch({ type: CHOOSE_LANGUAGE, payload: { data } });
};
