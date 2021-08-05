import { combineReducers } from 'redux';
import testReducer from './testReducer';
import { IntlReducer as Intl } from 'react-redux-multilingual';

const rootReducer = combineReducers({
  test: testReducer,
  Intl
});

export default rootReducer;
