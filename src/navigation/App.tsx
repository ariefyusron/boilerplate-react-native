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
  const persistState = useSelector((state: Reducers) => state.persist);

  useEffect(() => {
    if (first) {
      setFirst(false);
      if (persistState.language === "") {
        if (isEnglish()) {
          dispatch(chooseLanguage("en"));
        } else {
          dispatch(chooseLanguage("id"));
        }
      } else {
        dispatch(chooseLanguage(persistState.language));
      }
    }
  }, [dispatch, first, persistState.language]);

  return (
    <NavigationContainer>
      {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
      <Stack />
    </NavigationContainer>
  );
};

export default App;
