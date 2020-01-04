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
