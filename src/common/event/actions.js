export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
export const GET_ALL_EVENTS_SUCCESS = 'GET_ALL_EVENTS_SUCCESS';
export const GET_ALL_EVENTS_ERROR = 'GET_ALL_EVENTS_ERROR';

export const SAVE_EVENT = 'SAVE_EVENT';
export const SAVE_EVENT_SUCCESS = 'SAVE_EVENT_SUCCESS';
export const SAVE_EVENT_ERROR = 'SAVE_EVENT_ERROR';

export function saveEvent({name, location}) {
  return ({firebase, getUid}) => {
    return {
      type: SAVE_EVENT,
      payload: {
        promise: firebase
          .child('events')
          .child(getUid())
          .set({
            name: name.value,
            location: location.value,
          })
      }
    }
  };
}

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
