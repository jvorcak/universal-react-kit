import { combineReducers } from 'redux';
import counter from '../counter/reducers';
import event from '../event/reducers';
import auth from '../auth/reducers';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  counter,
  event,
  auth,
  form: formReducer,
});

export default rootReducer;
