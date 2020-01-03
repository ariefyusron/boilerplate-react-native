import React, { ReactChild } from 'react';
import { KeyboardAvoidingView, Platform, ViewStyle } from 'react-native';

import styles from './styles';

interface Props {
  children: ReactChild;
  style?: ViewStyle;
}

const Component = (props: Props) => (
  <KeyboardAvoidingView
    behavior="padding"
    style={props.style}
    enabled={Platform.OS === 'ios'}>
    {props.children}
  </KeyboardAvoidingView>
);

Component.defaultProps = {
  style: styles.container
};

export default Component;
