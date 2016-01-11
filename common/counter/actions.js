export const SET_COUNTER = 'SET_COUNTER';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const INCREMENT_COUNTER_SUCCESS = 'INCREMENT_COUNTER_SUCCESS';

export function set(value) {
  return {
    type: SET_COUNTER,
    payload: value
  }
}

export function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  }
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter: {counter} } = getState();

    if (counter % 2 === 0) {
      return
    }

    dispatch(increment())
  }
}

export function incrementAsync(delay = 1000) {
  return {
    type: INCREMENT_COUNTER,
    payload: {
      promise: new Promise(function (resolve, reject) {
        setTimeout(() => {
          function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
          }
          resolve(getRandomInt(1, 100))
        }, 500);
      })
    }
  };
  //return dispatch => {
  //  setTimeout(() => {
  //    dispatch(increment())
  //  }, delay)
  //}
}
