import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import TransactionItem from './TransactionItem';
import { debounce } from '../utils';

class TransactionHistoryView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      payments: [],
      page: 0,
      loading: false,
    }

    this.fetchTransactionData = this.fetchTransactionData.bind(this);
    this.debouncedFetch = debounce(this.fetchTransactionData, 200);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.debouncedFetch);
    this.fetchTransactionData();
  }

  compnentWillUnmount() {
    window.removeEventListener('scroll', this.debouncedFetch);
  }

  fetchTransactionData() {
    const {page} = this.state;
    const url = '/api/transaction-history?page=' + page;
    fetch(url)
      .then(res => res.json())
      .then((payments) => {
        this.setState({
          payments: this.state.payments.concat(payments),
          page: this.state.page + 1,
        });
      })
  }

  handleScroll(event) {
    const innerHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const offsetHeight = document.body.offsetHeight;

    if ((innerHeight + scrollY) >= offsetHeight) {
      this.fetchTransactionData();
    }
  }

  render() {
    return (
      <div>
        <h1>Transaction History</h1>
        {this.state.payments.reverse().map(({email, amount, currency, createdAt}, i) =>
          <TransactionItem key={i} email={email} amount={amount} currency={currency} createdAt={createdAt}/>)}
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    )
  }
}

export default TransactionHistoryView;
