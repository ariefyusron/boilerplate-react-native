import { NavigationStackProp } from "react-navigation-stack";

interface Setting {
  language: string;
}

export interface Props {
  navigation: NavigationStackProp;
}

export interface State {
  setting: Setting;
}
