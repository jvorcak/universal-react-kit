export const SET_EVENT = 'SET_EVENT';
export const INCREMENT_EVENT = 'INCREMENT_EVENT';
export const DECREMENT_EVENT = 'DECREMENT_EVENT';

export function set(value) {
  return {
    type: SET_EVENT,
    payload: value
  }
}

export function increment() {
  return {
    type: INCREMENT_EVENT
  }
}

export function decrement() {
  return {
    type: DECREMENT_EVENT
  }
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return
    }

    dispatch(increment())
  }
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}
