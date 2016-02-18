export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';


export const LOGIN_WITH_FACEBOOK = 'LOGIN_WITH_FACEBOOK';
export const LOGIN_WITH_FACEBOOK_SUCCESS = 'LOGIN_WITH_FACEBOOK_SUCCESS';
export const LOGIN_WITH_FACEBOOK_ERROR = 'LOGIN_WITH_FACEBOOK_ERROR';

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

  // find a suitable name based on the meta info given by each provider
  function getName(authData) {
    switch(authData.provider) {
      case 'password':
        return authData.password.email.replace(/@.*/, '');
      case 'twitter':
        return authData.twitter.displayName;
      case 'facebook':
        return authData.facebook.displayName;
    }
  }

  return ({ firebase }) => Object({
    type: LOGIN,
    payload: {
      promise: firebase
        .authWithPassword({
          email,
          password,
        })
        .then(authData => {
          if (authData) {
            // save the user's profile into the database so we can list users,
            // use them in Security and Firebase Rules, and show profiles
            firebase.child("users").child(authData.uid).set({
              provider: authData.provider,
              name: getName(authData)
            });
          }
        })
      ,
    },
  });
}

export function loginWithFacebook() {
  return ({ firebase }) => Object({
    type: LOGIN_WITH_FACEBOOK,
    payload: {
      promise: firebase
        .authWithOAuthPopup('facebook'),
    },
  });
}