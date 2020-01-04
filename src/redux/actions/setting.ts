import { switchLanguage } from "../../I18n";
import { Dispatch } from "../types";

export const CHOOSE_LANGUAGE = "CHOOSE_LANGUAGE";

export const chooseLanguage = (data: string) => (dispatch: Dispatch) => {
  switchLanguage(data);
  dispatch({ type: CHOOSE_LANGUAGE, payload: { data } });
};
