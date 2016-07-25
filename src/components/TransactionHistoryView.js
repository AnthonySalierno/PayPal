import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import TransactionItem from './TransactionItem';

class TransactionHistoryView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      payments: [],
      page: 0,
      loading: false,
    }
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidMount() {
    const {page} = this.state;
    const url = '/transaction-history?page=' + page;
    fetch(url)
      .then(res => res.json())
      .then((payments) => {
        this.setState({
          payments: payments.concat(payments),
          page: this.state.page++,
        });
      })
  }

  handleScroll(event) {
    const scrollHeight = document.body.scrollHeight;
    const scrollTop = document.body.scrollTop;
    const innerHeight = window.innerHeight;

    if (scrollHeight === scrollTop + window.innerHeight) {
      //fetch data
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
