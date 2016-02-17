export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export function register(email, password) {
  return ({ firebase }) => Object({
    type: REGISTER,
    payload: {
      promise: firebase
        .createUser({
          email,
          password,
        }).then((userData) => console.log(
          "Successfully created user account with uid:", userData.uid)),
    },
  })
}
