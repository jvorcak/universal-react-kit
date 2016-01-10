import { SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from './actions';

export default function counter(state = {}, action) {
  switch (action.type) {
    case SET_COUNTER:
      return action.payload;
    case INCREMENT_COUNTER:
      return {...state, counter: state.counter + 1};
    case DECREMENT_COUNTER:
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
}
