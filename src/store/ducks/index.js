import {combineReducers} from 'redux';

import cleaning from './cleaning';
import beef from './beef';
import drink from './drink';
import aliment from './aliment';
import frozen from './frozen';
import dessert from './dessert';
import flavoring from './flavoring';

export default combineReducers({
  cleaning,
  beef,
  frozen,
  aliment,
  drink,
  dessert,
  flavoring
});
