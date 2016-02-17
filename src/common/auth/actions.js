export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function register(email, password) {
  return ({ firebase }) => Object({
    type: REGISTER,
    payload: {
      promise: firebase
        .createUser({
          email,
          password,
        }),
    },
  });
}


export function login(email, password) {
  return ({ firebase }) => Object({
    type: LOGIN,
    payload: {
      promise: firebase
        .authWithPassword({
          email,
          password,
        }),
    },
  });
}