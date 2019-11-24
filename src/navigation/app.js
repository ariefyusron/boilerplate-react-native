import {
  createStackNavigator,
  StackViewTransitionConfigs
} from 'react-navigation-stack';

import Home from '../Screens/Home';
import Setting from '../Screens/Setting';

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
