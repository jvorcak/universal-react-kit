import 'babel-core/polyfill';
import React from 'react';
import Router from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../common/configureStore';
import createRoutes from './createRoutes';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('app');
const routes = createRoutes();

render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      {routes}
    </Router>
  </Provider>, rootElement
);
