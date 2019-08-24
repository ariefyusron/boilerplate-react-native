import { createStackNavigator } from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';

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
    transitionConfig: () => fromRight()
  }
);
