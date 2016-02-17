import { Record } from 'immutable';
import { REGISTER_SUCCESS } from './actions';
import { LOGIN_SUCCESS } from './actions';

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
      return state.set('loggedIn', 1);
    default:
      return state;
  }
}
