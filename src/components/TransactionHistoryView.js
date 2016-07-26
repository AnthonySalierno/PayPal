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
    this.handleScroll = this.handleScroll.bind(this);
    this.debouncedHandleScroll = debounce(this.handleScroll, 200);
  }

  componentDidMount() {
    const transactionList = document.querySelector('.transaction-list');
    transactionList.addEventListener('scroll', this.debouncedHandleScroll);
    this.fetchTransactionData();
  }

  compnentWillUnmount() {
    const transactionList = document.querySelector('.transaction-list');
    transactionList.removeEventListener('scroll', this.debouncedHandleScroll);
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

  handleScroll(e) {
    const totalScrollHeight = e.target.scrollHeight;
    const visibleDivHeight = e.target.clientHeight;
    const currentScrollPosition = e.target.scrollTop;

    if (currentScrollPosition + visibleDivHeight === totalScrollHeight) {
      this.fetchTransactionData();
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Transaction History</h1>
        <div className="transaction-list">
          {this.state.payments.map(({email, amount, currency, createdAt, id}) =>
            <TransactionItem key={id} email={email} amount={amount} currency={currency} createdAt={createdAt}/>)}
        </div>
        <div>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default TransactionHistoryView;
