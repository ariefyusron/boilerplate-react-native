import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { NavigationStackProp } from "react-navigation-stack";
import { useDispatch, useSelector } from "react-redux";

import I18n from "../../I18n";
import { chooseLanguage } from "../../redux/actions";
import styles from "./styles";

interface Setting {
  language: string;
}

interface Props {
  navigation: NavigationStackProp;
}

interface State {
  setting: Setting;
}

const Setting = (props: Props) => {
  const setting = useSelector((state: State) => state.setting);
  const dispatch = useDispatch();

  const handleClick = async (value: string) => {
    await dispatch(chooseLanguage(value));
    props.navigation.setParams({ header: I18n.t("setting") });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableHighlight
          style={[styles.button, styles.border]}
          underlayColor="rgba(100,100,100,0.1)"
          disabled={setting.language === "en"}
          onPress={() => handleClick("en")}
        >
          <>
            <Text style={styles.text}>English</Text>
            {setting.language === "en" ? (
              <View style={styles.wrapIcon}>
                <Icon name="check" size={20} />
              </View>
            ) : null}
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor="rgba(100,100,100,0.1)"
          disabled={setting.language === "id"}
          onPress={() => handleClick("id")}
        >
          <>
            <Text style={styles.text}>Bahasa Indonesia</Text>
            {setting.language === "id" ? (
              <View style={styles.wrapIcon}>
                <Icon name="check" size={20} />
              </View>
            ) : null}
          </>
        </TouchableHighlight>
      </View>
    </View>
  );
};

Setting.navigationOptions = (props: Props) => ({
  title: props.navigation.getParam("header") || I18n.t("setting")
});

export default Setting;
