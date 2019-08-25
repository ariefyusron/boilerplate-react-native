import { combineReducers } from 'redux';

import setting from '../../Setting/reducer';
import home from '../../Home/reducer';

export default combineReducers({
  setting,
  home
});
