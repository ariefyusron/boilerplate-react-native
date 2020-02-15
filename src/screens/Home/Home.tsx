import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import I18n from "../../I18n";
import { IMAGES } from "../../configs";
import { KeyboardAvoidingView } from "../../components";
import styles from "./styles";

// action & types redux
import { addData, deleteData } from "../../redux/actions";
import { Reducers } from "../../redux/types";

declare const global: { HermesInternal: null | {} };

const Home = () => {
  useIsFocused();
  const [input, setInput] = useState("");
  const { home } = useSelector(
    (state: Reducers) => ({
      home: state.home
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const _handleDeleteData = (index: number) => {
    dispatch(deleteData(index));
  };

  const _onClickTrash = (item: number) => {
    Alert.alert(I18n.t("delete"), I18n.t("youSure"), [
      { text: I18n.t("no") },
      { text: I18n.t("yes"), onPress: () => _handleDeleteData(item) }
    ]);
  };

  const _handleAddData = () => {
    dispatch(addData(input));
    setInput("");
    Keyboard.dismiss();
  };

  const _renderItem = ({ item, index }: any) => (
    <View style={styles.row}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={() => _onClickTrash(index)}>
        <Icon name="delete" size={20} color="#d63031" />
      </TouchableOpacity>
    </View>
  );

  const _renderEmptyItem = () => (
    <View style={styles.wrapEmptyData}>
      <Text>{I18n.t("empty")}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.engine}>
          <Text>{I18n.t("language")}</Text>
          <View style={styles.wrapAuthor}>
            <Text>
              {`Hermes: ${
                global.HermesInternal == null ? I18n.t("off") : I18n.t("on")
              }`}
            </Text>
            <Text>Arief Yusron</Text>
          </View>
        </View>
        <KeyboardAvoidingView>
          <View style={styles.container}>
            <View style={styles.wrapImage}>
              <Image source={IMAGES.logo} style={styles.image} />
            </View>
            <View style={styles.wrapButtonIcon}>
              <TouchableOpacity
                style={styles.buttonIcon}
                onPress={() => navigate("Setting")}
              >
                <Icon name="settings" size={30} />
                <Text>{I18n.t("setting")}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.wrapContent}>
              <View style={styles.content}>
                <View style={styles.header}>
                  <TextInput
                    placeholder={I18n.t("typeHere")}
                    style={styles.input}
                    onChangeText={text => setInput(text)}
                    value={input}
                  />
                  <TouchableOpacity
                    onPress={() => _handleAddData()}
                    disabled={input === ""}
                  >
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={
                        input === "" ? "rgba(0, 184, 148, 0.3)" : "#00b894"
                      }
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.body}>
                  <FlatList
                    keyboardShouldPersistTaps="handled"
                    data={home.data}
                    extraData={I18n.t("empty")}
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
