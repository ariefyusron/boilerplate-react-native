import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Main from '../main';
import App from './app';

const switchNavigator = createSwitchNavigator({
  Main,
  App
});

export default createAppContainer(switchNavigator);
