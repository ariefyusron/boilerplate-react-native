import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

const KeyboardAvoidingViewComponent = ({ children }) => (
  <KeyboardAvoidingView
    behavior="padding"
    style={styles.container}
    enabled={Platform.OS === 'ios'}>
    {children}
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default KeyboardAvoidingViewComponent;
