import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import Stack from "./Stack";
import { isEnglish } from "../I18n";

// action & types redux
import { chooseLanguage } from "../redux/actions";
import { Reducers } from "../redux/types";

const App = () => {
  const setting = useSelector((state: Reducers) => state.setting);
  const dispatch = useDispatch();

  useEffect(() => {
    if (setting.language === "") {
      if (isEnglish()) {
        dispatch(chooseLanguage("en"));
      } else {
        dispatch(chooseLanguage("id"));
      }
    } else {
      dispatch(chooseLanguage(setting.language));
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default App;
