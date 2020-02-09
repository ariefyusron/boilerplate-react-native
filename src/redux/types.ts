// Action
interface Payload {
  data?: any;
}

interface Params {
  type: string;
  payload?: Payload;
}

export type Dispatch = (params: Params) => void;
export type GetState = () => Reducers;

export interface Action {
  type: string;
  payload: Payload;
}

// Reducer
export interface Reducers {
  home: HomeState;
  setting: SettingState;
}

export interface HomeState {
  data: any[];
}

export interface SettingState {
  language: string;
}
