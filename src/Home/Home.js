import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  TextInput,
  ScrollView,
  Keyboard,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import { connect } from 'react-redux';

import I18n from '../Public/I18n';
import { heightWithPercent } from '../Public/utils';
import { addData, deleteData } from './action';
import { KeyboardAvoidingView } from '../Public/components';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  onClickTrash(item) {
    Alert.alert(I18n.t('delete'), I18n.t('youSure'), [
      { text: I18n.t('no') },
      { text: I18n.t('yes'), onPress: () => this.deleteData(item) }
    ]);
  }

  deleteData(item) {
    this.props.deleteData(item);
  }

  async addData() {
    await this.props.addData(this.state.input);
    this.setState({ input: '' });
    Keyboard.dismiss();
  }

  _renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={() => this.onClickTrash(item)}>
        <Icon name="delete" size={20} color="#d63031" />
      </TouchableOpacity>
    </View>
  );

  _renderEmptyItem = () => (
    <View style={styles.wrapEmptyData}>
      <Text>{I18n.t('empty')}</Text>
    </View>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.engine}>
            <Text>{I18n.t('language')}</Text>
            <View style={styles.wrapAuthor}>
              <Text>
                {`Hermes: ${
                  global.HermesInternal == null ? I18n.t('off') : I18n.t('on')
                }`}
              </Text>
              <Text>Arief Yusron</Text>
            </View>
          </View>
          <KeyboardAvoidingView>
            <ScrollView
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled">
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
              <View style={styles.wrapContent}>
                <View style={styles.content} elevation={5}>
                  <View style={styles.header}>
                    <TextInput
                      placeholder={I18n.t('typeHere')}
                      style={styles.input}
                      onChangeText={text => this.setState({ input: text })}
                      value={this.state.input}
                    />
                    <TouchableOpacity
                      onPress={() => this.addData()}
                      disabled={this.state.input === ''}>
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color={
                          this.state.input === ''
                            ? 'rgba(0, 184, 148, 0.3)'
                            : '#00b894'
                        }
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.body}>
                    <FlatList
                      data={this.props.home.data}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={this._renderItem}
                      ListEmptyComponent={this._renderEmptyItem}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
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
    alignItems: 'flex-end'
  },
  wrapButtonIcon: {
    width: '100%',
    alignItems: 'center'
  },
  buttonIcon: {
    padding: 10,
    alignItems: 'center'
  },
  wrapContent: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
    flex: 1,
    marginBottom: 30,
    height: heightWithPercent(40)
  },
  content: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: '100%',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2
  },
  header: {
    padding: 10,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  body: {
    paddingVertical: 5,
    flex: 1
  },
  row: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  wrapEmptyData: {
    paddingTop: 50,
    alignItems: 'center'
  },
  input: {
    padding: 0,
    paddingRight: 5,
    flex: 1
  }
});

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = {
  addData,
  deleteData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigationFocus(Home));
