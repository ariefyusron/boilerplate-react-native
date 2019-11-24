import {
  createStackNavigator,
  StackViewTransitionConfigs
} from 'react-navigation-stack';

import Home from '../../Home';
import Setting from '../../Setting';

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
