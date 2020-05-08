import React, { useCallback } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles";
import { COLORS } from "../../configs";

// action & types redux
import { chooseLanguage } from "../../redux/actions";
import { Reducers } from "../../redux/types";

const Setting = () => {
  const dispatch = useDispatch();

  const settingState = useSelector((state: Reducers) => state.setting);

  const _handleClick = useCallback(
    (value: string) => {
      dispatch(chooseLanguage(value));
    },
    [dispatch]
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableHighlight
          style={[styles.button, styles.border]}
          underlayColor={COLORS.underlay}
          disabled={settingState.language === "en"}
          onPress={() => _handleClick("en")}
        >
          <>
            <Text style={styles.text}>English</Text>
            {settingState.language === "en" ? (
              <View style={styles.wrapIcon}>
                <Icon name="check" size={20} />
              </View>
            ) : null}
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor={COLORS.underlay}
          disabled={settingState.language === "id"}
          onPress={() => _handleClick("id")}
        >
          <>
            <Text style={styles.text}>Bahasa Indonesia</Text>
            {settingState.language === "id" && (
              <View style={styles.wrapIcon}>
                <Icon name="check" size={20} />
              </View>
            )}
          </>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Setting;
