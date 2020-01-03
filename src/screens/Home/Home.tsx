import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  TextInput,
  Keyboard,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationStackProp } from 'react-navigation-stack';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import I18n from '../../I18n';
import { addData, deleteData } from '../../redux/actions';
import { LOGO } from '../../configs';
import { KeyboardAvoidingView } from '../../components';
import styles from './styles';

interface Props {
  navigation: NavigationStackProp;
}

interface Data {
  data: Array<string>;
}

interface State {
  home: Data;
}

declare const global: { HermesInternal: null | object };

const Home = (props: Props) => {
  const [input, setInput] = useState('');
  const { home } = useSelector(
    (state: State) => ({
      home: state.home
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const onClickTrash = (item: number) => {
    Alert.alert(I18n.t('delete'), I18n.t('youSure'), [
      { text: I18n.t('no') },
      { text: I18n.t('yes'), onPress: () => handleDeleteData(item) }
    ]);
  };

  const handleDeleteData = (index: number) => {
    dispatch(deleteData(index));
  };

  const handleAddData = async () => {
    await dispatch(addData(input));
    setInput('');
    Keyboard.dismiss();
  };

  const _renderItem = ({ item, index }: any) => (
    <View style={styles.row}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={() => onClickTrash(index)}>
        <Icon name="delete" size={20} color="#d63031" />
      </TouchableOpacity>
    </View>
  );

  const _renderEmptyItem = () => (
    <View style={styles.wrapEmptyData}>
      <Text>{I18n.t('empty')}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.engine}>
          <Text>{I18n.t('language')}</Text>
          <View style={styles.wrapAuthor}>
            <Text>
              {`Hermes: ${
                global.HermesInternal === null ? I18n.t('off') : I18n.t('on')
              }`}
            </Text>
            <Text>Arief Yusron</Text>
          </View>
        </View>
        <KeyboardAvoidingView>
          <View style={styles.container}>
            <View style={styles.wrapImage}>
              <Image source={LOGO} style={styles.image} />
            </View>
            <View style={styles.wrapButtonIcon}>
              <TouchableOpacity
                style={styles.buttonIcon}
                onPress={() => props.navigation.navigate('Setting')}>
                <Icon name="settings" size={30} />
                <Text>{I18n.t('setting')}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.wrapContent}>
              <View style={styles.content}>
                <View style={styles.header}>
                  <TextInput
                    placeholder={I18n.t('typeHere')}
                    style={styles.input}
                    onChangeText={text => setInput(text)}
                    value={input}
                  />
                  <TouchableOpacity
                    onPress={() => handleAddData()}
                    disabled={input === ''}>
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={
                        input === '' ? 'rgba(0, 184, 148, 0.3)' : '#00b894'
                      }
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.body}>
                  <FlatList
                    keyboardShouldPersistTaps="handled"
                    data={home.data}
                    extraData={I18n.t('empty')}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={_renderItem}
                    ListEmptyComponent={_renderEmptyItem}
                  />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
