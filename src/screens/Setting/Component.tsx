import React, { useCallback } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { COLORS } from "../../configs";
import { Icon } from "../../components";
import { chooseLanguage } from "../../redux/actions";
import { Reducers } from "../../redux/types";

import styles from "./styles";

const Component = () => {
  const dispatch = useDispatch();

  const persistState = useSelector((state: Reducers) => state.persist);

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
          disabled={persistState.language === "en"}
          onPress={() => _handleClick("en")}
        >
          <>
            <Text style={styles.text}>English</Text>
            {persistState.language === "en" ? (
              <View style={styles.wrapIcon}>
                <Icon name="check" size={20} />
              </View>
            ) : null}
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor={COLORS.underlay}
          disabled={persistState.language === "id"}
          onPress={() => _handleClick("id")}
        >
          <>
            <Text style={styles.text}>Bahasa Indonesia</Text>
            {persistState.language === "id" && (
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

export default Component;
