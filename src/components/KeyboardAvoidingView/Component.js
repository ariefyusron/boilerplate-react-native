import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, Platform } from 'react-native';

import styles from './styles';

const Component = ({ children, style }) => (
  <KeyboardAvoidingView
    behavior="padding"
    style={style}
    enabled={Platform.OS === 'ios'}>
    {children}
  </KeyboardAvoidingView>
);

Component.propTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object
};

Component.defaultProps = {
  style: styles.container
};

export default Component;
