import React, { useEffect, useState } from "react";
import { Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import Stack from "./Stack";
import { isEnglish } from "../I18n";

// action & types redux
import { chooseLanguage } from "../redux/actions";
import { Reducers } from "../redux/types";

const App = () => {
  const dispatch = useDispatch();

  const [first, setFirst] = useState(true);
  const settingState = useSelector((state: Reducers) => state.setting);

  useEffect(() => {
    if (first) {
      setFirst(false);
      if (settingState.language === "") {
        if (isEnglish()) {
          dispatch(chooseLanguage("en"));
        } else {
          dispatch(chooseLanguage("id"));
        }
      } else {
        dispatch(chooseLanguage(settingState.language));
      }
    }
  }, [dispatch, first, settingState.language]);

  return (
    <NavigationContainer>
      {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
      <Stack />
    </NavigationContainer>
  );
};

export default App;
