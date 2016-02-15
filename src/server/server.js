import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { match, RoutingContext } from 'react-router';
import Helmet from 'react-helmet';

import configureStore from '../common/configureStore';
import createRoutes from '../client/createRoutes';
import translations from '../common/translations';

import fetchComponentData from '../common/fetchComponentData';

const app = new Express();
const port = 3000;
const routes = createRoutes();

function renderFullPage(html, initialState, head, locale, messages) {
  return `
    <!doctype html>
    <html>
      <head>
        ${head.title.toString()}
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          window.__I18N__ = ${JSON.stringify({ locale, messages })};
        </script>
        <script src="//localhost:3001/static/bundle.js"></script>
      </body>
    </html>
    `;
}

function handleRender(req, res) {
  return match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).end(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const locale = req.query.locale || 'en-US';
      const messages = translations[locale];
      const store = configureStore();

      fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
        .then(() => {
          const html = renderToString(
            <Provider store={store}>
              <IntlProvider locale={locale} messages={messages}>
                <RoutingContext {...renderProps}/>
              </IntlProvider>
            </Provider>
          );

          const head = Helmet.rewind();

          // Grab the initial state from our Redux store
          const finalState = store.getState();

          // Send the rendered page back to the client
          res.end(renderFullPage(html, finalState, head, locale, messages));
        });
    } else {
      res.status(404).send('Not found.');
    }
  });
}

app.use(handleRender);
app.listen(port, (error) => {
  /* eslint-disable no-console */
  if (error) {
    console.error(error);
  } else {
    console.info(`Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
