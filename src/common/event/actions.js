export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
export const GET_ALL_EVENTS_SUCCESS = 'GET_ALL_EVENTS_SUCCESS';
export const GET_ALL_EVENTS_ERROR = 'GET_ALL_EVENTS_ERROR';

export function getAllEvents() {
  return ({ firebase }) => Object({
    type: GET_ALL_EVENTS,
    payload: {
      promise: firebase
        .child('name')
        .once('value')
        .then(x => x.val()),
    },
  });
}
