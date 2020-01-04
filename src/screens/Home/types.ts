import { NavigationStackProp } from "react-navigation-stack";

export interface Props {
  navigation: NavigationStackProp;
}

interface Data {
  data: Array<string>;
}

export interface State {
  home: Data;
}

export declare const global: { HermesInternal: null | object };
