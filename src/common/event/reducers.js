import { Record } from 'immutable';
import { GET_ALL_EVENTS, GET_ALL_EVENTS_SUCCESS } from './actions';

export const InitialState = new Record({
  events: 0,
});
const initialState = new InitialState();

const revive = ({ events }) => initialState.merge({
  events,
});

export default function counterReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {
    case GET_ALL_EVENTS_SUCCESS:
      return state.set('events', action.payload);
    default:
      return state;
  }
}
