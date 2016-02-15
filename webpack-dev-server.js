import Express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config';

const app = new Express();
const port = 3001;

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler,
  {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }
));
app.use(webpackHotMiddleware(compiler));

app.listen(port, (error) => {
  /* eslint-disable no-console */
  if (error) {
    console.error(error);
  } else {
    console.info(`Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
