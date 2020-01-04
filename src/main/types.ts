import { NavigationStackProp } from "react-navigation-stack";

export interface Props {
  navigation: NavigationStackProp;
}

interface Setting {
  language: string;
}

export interface State {
  setting: Setting;
}
