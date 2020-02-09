import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  TransitionPresets,
  createStackNavigator
} from "@react-navigation/stack";

import Home from "../screens/Home";
import Setting from "../screens/Setting";

const { Navigator, Screen } = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Navigator
      initialRouteName="Home"
      screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
    >
      <Screen name="Home" component={Home} options={{ header: () => null }} />
      <Screen name="Setting" component={Setting} />
    </Navigator>
  </NavigationContainer>
);

export default App;
