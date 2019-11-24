import {
  createStackNavigator,
  StackViewTransitionConfigs
} from 'react-navigation-stack';

import Home from '../screens/Home';
import Setting from '../screens/Setting';

export default createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Setting
  },
  {
    transitionConfig: () => ({
      transitionSpec: 200,
      screenInterpolator:
        StackViewTransitionConfigs.SlideFromRightIOS.screenInterpolator
    })
  }
);
