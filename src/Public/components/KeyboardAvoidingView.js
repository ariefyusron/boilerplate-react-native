import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

const KeyboardAvoidingViewComponent = ({ children }) => {
  return Platform.OS === 'ios' ? (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      {children}
    </KeyboardAvoidingView>
  ) : (
    children
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default KeyboardAvoidingViewComponent;
