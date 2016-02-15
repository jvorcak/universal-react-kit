import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './app/reducers';
import DevTools from '../client/devTools';
import promiseMiddleware from 'redux-promise-middleware';
import Firebase from 'firebase';
import Rx from 'rx';
import firebasePromisified from 'firebase-promisified';
import inject from 'redux-inject';

// adds Rx and Promises to the Firebase prototype
//firebasePromisified(Firebase, Promise, Rx);
const firebase = new Firebase('https://fiery-inferno-4599.firebaseio.com/');

//firebase.set({"name": "Alex Wolfe"});


//firebase
//  .child('events')
//  .child('EkxAj2jUx')
  //.promiseUpdate()
  //.then(x => {
  //  console.log('........', x.createdAt);
  //  return x;
  //}, y => console.error(x));

const logger = createLogger({ logger: console });
const createStoreWithMiddleware = compose(
  applyMiddleware(
    inject({ firebase }),
    thunk,
    logger,
    promiseMiddleware({
      promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR'],
    })
  ),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./app/reducers', () => {
      const nextRootReducer = require('./app/reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
