import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';

import config from '../../webpack.config.js';
import initializeDatabase from '../database/dummyData';
import { addPayment, getPayments } from '../database/controller';

const app = express();
const compiler = webpack(config);

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../dist')));
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.post('/api/send-money', (req, res) => {
  addPayment(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.get('/api/transaction-history', (req, res) => {
  const page = req.query.page;
  getPayments(page);
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

const PORT = 8080;

initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log('App listening on port ' + PORT)
  });
});
