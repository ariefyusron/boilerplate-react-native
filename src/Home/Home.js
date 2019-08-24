import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import I18n from '../Public/I18n';

class Home extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text>{I18n.t('language')}</Text>
            <Text>{I18n.t('engine')}: Hermes</Text>
          </View>
        )}
        <View style={styles.wrapImage}>
          <Image source={require('../Public/assets/images/logo.png')} style={styles.image} />
        </View>
        <View style={styles.wrapButtonIcon}>
          <TouchableOpacity style={styles.buttonIcon} onPress={() => this.props.navigation.navigate('Setting')}>
            <Icon name="settings" size={30} />
            <Text>{I18n.t('setting')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  wrapImage: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
  engine: {
    position: 'absolute',
    top: 5,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  wrapButtonIcon: {
    width: '100%',
    alignItems: 'center',
  },
  buttonIcon: {
    padding: 10,
    alignItems: 'center',
  },
});

export default Home;
