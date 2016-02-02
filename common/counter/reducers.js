import Immutable, {Record} from 'immutable';
import { SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER_SUCCESS } from './actions';

export const InitialState = new Record({
  counter: null
});
const initialState = new InitialState();

const revive = ({counter}) => initialState.merge({
  counter
});

export default function counter(state = initialState, action) {
  if(!(state instanceof InitialState)) return revive(state);
  
  switch (action.type) {
    case SET_COUNTER:
      return state.set('counter', action.payload);
    case INCREMENT_COUNTER:
      return state.set('counter', state.get('counter') + 1);
    case DECREMENT_COUNTER:
      return state.set('counter', state.get('counter') - 1);
    case INCREMENT_COUNTER_SUCCESS:
      return state.set('counter', state.get('counter') + action.payload);
    default:
      return state;
  }
}
