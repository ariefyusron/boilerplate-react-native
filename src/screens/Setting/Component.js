import React, { Component, Fragment } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import I18n from '../../I18n';
import { chooseLanguage } from '../../redux/actions';
import styles from './styles';

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

Setting.propTypes = {
  setting: PropTypes.object.isRequired,
  chooseLanguage: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

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
