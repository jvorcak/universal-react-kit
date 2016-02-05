export const SET_EVENT = 'SET_EVENT';
export const INCREMENT_EVENT = 'INCREMENT_EVENT';
export const DECREMENT_EVENT = 'DECREMENT_EVENT';

export function incrementEvent() {
  return {
    type: INCREMENT_EVENT,
  };
}

export function decrementEvent() {
  return {
    type: DECREMENT_EVENT,
  };
}
