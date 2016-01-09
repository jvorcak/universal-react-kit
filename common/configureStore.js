import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './app/reducers';
import DevTools from '../client/devTools';

const logger = createLogger();
const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunk, logger
  ),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./app/reducers', () => {
      const nextRootReducer = require('./app/reducers');
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
