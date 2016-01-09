import { combineReducers } from 'redux';
import counter from '../counter/reducers';
import event from '../event/reducers';

const rootReducer = combineReducers({
  counter
});

export default rootReducer
