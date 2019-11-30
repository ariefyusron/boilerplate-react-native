import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, Platform } from 'react-native';

import styles from './styles';

const Component = ({ children }) => (
  <KeyboardAvoidingView
    behavior="padding"
    style={styles.container}
    enabled={Platform.OS === 'ios'}>
    {children}
  </KeyboardAvoidingView>
);

Component.propTypes = {
  children: PropTypes.element.isRequired
};

export default Component;
