import React from 'react';
import Router from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../common/configureStore';
import createRoutes from './createRoutes';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {IntlProvider} from 'react-intl';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('app');
const routes = createRoutes();

import messages from '../common/messages';

render(
  <Provider store={store}>
    <IntlProvider locale="en" messages={messages}>
      <Router history={createBrowserHistory()}>
        {routes}
      </Router>
    </IntlProvider>
  </Provider>, rootElement
);
