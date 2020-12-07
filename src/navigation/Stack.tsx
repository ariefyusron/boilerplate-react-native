import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

import Home from "../screens/Home";
import Setting from "../screens/Setting";
import i18n from "../I18n";

const { Navigator, Screen } = createStackNavigator();

const Stack = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
  >
    <Screen name="Home" component={Home} options={{ header: () => null }} />
    <Screen
      name="Setting"
      component={Setting}
      options={{ title: i18n.t("setting") }}
    />
  </Navigator>
);

export default Stack;
