import { CHOOSE_LANGUAGE } from "../actions";
import { Action, SettingState } from "../types";

const initialState: SettingState = {
  language: ""
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case CHOOSE_LANGUAGE:
      return { ...state, language: payload.data };
    default:
      return state;
  }
};
