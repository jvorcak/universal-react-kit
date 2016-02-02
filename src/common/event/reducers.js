import { SET_EVENT, INCREMENT_EVENT, DECREMENT_EVENT } from './actions';

export default function event(state = 0, action) {
  switch (action.type) {
    case SET_EVENT:
      return action.payload;
    case INCREMENT_EVENT:
      return state + 1;
    case DECREMENT_EVENT:
      return state - 1;
    default:
      return state;
  }
}
