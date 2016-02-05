import React from 'react';
import Router from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../common/configureStore';
import createRoutes from './createRoutes';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { IntlProvider } from 'react-intl';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('app');
const routes = createRoutes();


const { locale, messages } = window.__I18N__;

render(
  <Provider store={store}>
    <IntlProvider locale={locale} messages={messages}>
      <Router history={createBrowserHistory()}>
        {routes}
      </Router>
    </IntlProvider>
  </Provider>, rootElement
);
