import React, { Component, Fragment } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationStackProp, StackHeaderProps } from 'react-navigation-stack';
import { connect } from 'react-redux';

import I18n from '../../I18n';
import { chooseLanguage } from '../../redux/actions';
import styles from './styles';

interface Setting {
  language: string;
}

interface Props {
  navigation: NavigationStackProp;
  chooseLanguage: (value: string) => void;
  setting: Setting;
}

interface MapStateToProps {
  setting: Setting;
}

class Setting extends Component<Props> {
  static navigationOptions = ({ navigation }: StackHeaderProps) => ({
    title: navigation.getParam('header') || I18n.t('setting')
  });

  async handleClick(value: string) {
    await this.props.chooseLanguage(value);
    this.props.navigation.setParams({ header: I18n.t('setting') });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
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

const mapStateToProps = (state: MapStateToProps) => ({
  setting: state.setting
});

const mapDispatchToProps = {
  chooseLanguage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);
