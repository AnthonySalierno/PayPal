import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';
import initializeDatabase from './dummyData';

const app = express();
const compiler = webpack(config);

app.use(express.static(path.join(__dirname, '/dist')));
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const PORT = 8080;

initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log('App listening on port ' + PORT)
  });
});
