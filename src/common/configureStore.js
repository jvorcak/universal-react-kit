import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './app/reducers';
import DevTools from '../client/devTools';
import promiseMiddleware from 'redux-promise-middleware';
import Firebase from 'firebase';
import shortid from 'shortid';

// adds Rx and Promises to the Firebase prototype

export default function configureStore(initialState) {

  const firebase = new Firebase('https://fiery-inferno-4599.firebaseio.com/');

  // Inspired by https://github.com/este/este
  // TODO Maybe I misunderstood, but it fails if an actions returns undefined.
  const injectMiddleware = deps => store => next => action =>
    next(typeof action === 'function'
      ? action({...deps, store})
      : action
    );
  const logger = createLogger({ logger: console });

  const store = compose(
    applyMiddleware(
      injectMiddleware({
        firebase,
        getUid: () => shortid.generate(),
      }),
      logger,
      promiseMiddleware({
        promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR'],
      })
    ),
    DevTools.instrument()
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./app/reducers', () => {
      const nextRootReducer = require('./app/reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
