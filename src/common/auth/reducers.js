import Immutable, { Record } from 'immutable';
import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT, CHECK_AUTH_SUCCESS } from './actions';

export const InitialState = new Record({
  loggedIn: 0,
});
const initialState = new InitialState();

const revive = ({ loggedIn }) => initialState.merge({
  loggedIn,
});

export default function authReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('loggedIn', Immutable.fromJS(action.payload));
    case CHECK_AUTH_SUCCESS:
      return state.set('loggedIn', Immutable.fromJS(action.payload));
    case LOGOUT:
      return state.set('loggedIn', null);
    default:
      return state;
  }
}
