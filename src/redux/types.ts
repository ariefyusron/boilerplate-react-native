interface Params {
  type: string;
  payload: object;
}

export type Dispatch = (params: Params) => void;

export interface Action {
  type: string;
  payload: any;
}
