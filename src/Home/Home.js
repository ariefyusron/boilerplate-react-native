import React, { Component, Fragment } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import I18n from '../Public/I18n';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <View style={styles.engine}>
          <Text>{I18n.t('language')}</Text>
          <Text>
            {`Hermes: ${
              global.HermesInternal == null ? I18n.t('off') : I18n.t('on')
            }`}
          </Text>
        </View>
        <View style={styles.wrapAuthor}>
          <Text>Arief Yusron</Text>
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.wrapImage}>
            <Image
              source={require('../Public/assets/images/logo.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.wrapButtonIcon}>
            <TouchableOpacity
              style={styles.buttonIcon}
              onPress={() => this.props.navigation.navigate('Setting')}>
              <Icon name="settings" size={30} />
              <Text>{I18n.t('setting')}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF'
  },
  wrapImage: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30
  },
  image: {
    width: 200,
    height: 200
  },
  engine: {
    position: 'absolute',
    zIndex: 1,
    top: 5,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  wrapAuthor: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    zIndex: 1
  },
  wrapButtonIcon: {
    width: '100%',
    alignItems: 'center'
  },
  buttonIcon: {
    padding: 10,
    alignItems: 'center'
  }
});

export default withNavigationFocus(Home);
