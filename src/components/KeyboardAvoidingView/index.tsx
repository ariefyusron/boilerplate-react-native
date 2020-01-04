import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import styles from "./styles";
import { Props } from "./types";

const Component = ({ children, style }: Props) => (
  <KeyboardAvoidingView
    behavior="padding"
    style={style}
    enabled={Platform.OS === "ios"}
  >
    {children}
  </KeyboardAvoidingView>
);

Component.defaultProps = {
  style: styles.container
};

export default Component;
