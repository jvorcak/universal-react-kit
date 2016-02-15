export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
export const GET_ALL_EVENTS_SUCCESS = 'GET_ALL_EVENTS_SUCCESS';
export const GET_ALL_EVENTS_ERROR = 'GET_ALL_EVENTS_ERROR';

export function getAllEvents() {
  return ({firebase}) => {
    return {
      type: GET_ALL_EVENTS,
      payload: {
        promise: firebase
          .child('name')
          .once('value')
          .then(x => {console.log(x.val()); return x.val();})
      },
    }
  };
}

