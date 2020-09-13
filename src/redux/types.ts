// Action
interface Payload {
  data?: any;
}

interface Params {
  type: string;
  payload?: Payload;
}

export type Dispatch = (params: Params | Function) => void;
export type GetState = () => Reducers;

export interface Action {
  type: string;
  payload: Payload;
}

// Reducer
export interface Reducers {
  home: HomeState;
  persist: PersistState;
}

export interface HomeState {
  data: any[];
  isLoadingGetSeason: boolean;
  listSeasons: any[];
}

export interface PersistState {
  language: string;
}
