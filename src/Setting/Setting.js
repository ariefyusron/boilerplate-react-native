import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import I18n from '../Public/I18n';
import { chooseLanguage } from './action';

class Setting extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('header') || I18n.t('setting')
  });

  async handleClick(value) {
    await this.props.chooseLanguage(value);
    this.props.navigation.setParams({ header: I18n.t('setting') });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content} elevation={3}>
          <TouchableHighlight
            style={[styles.button, styles.border]}
            underlayColor="rgba(100,100,100,0.1)"
            disabled={this.props.setting.language === 'en'}
            onPress={() => this.handleClick('en')}>
            <Fragment>
              <Text style={styles.text}>English</Text>
              {this.props.setting.language === 'en' ? (
                <View style={styles.wrapIcon}>
                  <Icon name="check" size={20} />
                </View>
              ) : null}
            </Fragment>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor="rgba(100,100,100,0.1)"
            disabled={this.props.setting.language === 'id'}
            onPress={() => this.handleClick('id')}>
            <Fragment>
              <Text style={styles.text}>Bahasa Indonesia</Text>
              {this.props.setting.language === 'id' ? (
                <View style={styles.wrapIcon}>
                  <Icon name="check" size={20} />
                </View>
              ) : null}
            </Fragment>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  content: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 50
  },
  button: {
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center'
  },
  border: {
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 0.5
  },
  text: {
    fontSize: 16
  },
  wrapIcon: {
    position: 'absolute',
    right: 10,
    top: 20
  }
});

const mapStateToProps = state => ({
  setting: state.setting
});

const mapDispatchToProps = {
  chooseLanguage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);
