import { ReactChild } from "react";
import { ViewStyle } from "react-native";

export interface Props {
  children: ReactChild;
  style?: ViewStyle;
}
