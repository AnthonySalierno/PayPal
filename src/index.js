import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import LandingPage from './components/LandingPage';
import SendMoneyView from './components/SendMoneyView';
import TransactionHistoryView from './components/TransactionHistoryView';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage}/>
      <Route path="/send-money" component={SendMoneyView} />
      <Route path="/transaction-history" component={TransactionHistoryView} />
    </Route>
  </Router>,
  document.getElementById('app')
);
