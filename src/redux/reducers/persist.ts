import { CHOOSE_LANGUAGE } from "../actions";
import { Action, PersistState } from "../types";

const initialState: PersistState = {
  language: "",
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case CHOOSE_LANGUAGE:
      return { ...state, language: payload.data };
    default:
      return state;
  }
};
