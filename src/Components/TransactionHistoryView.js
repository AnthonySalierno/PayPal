import React from 'react';

import TransactionItem from './TransactionItem';

class TransactionHistoryView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      payments: [],
    }
  }

  componentDidMount() {
    fetch('/transaction-history')
      .then(res => res.json())
      .then((payments) => {
        this.setState({
          payments,
        });
      })
  }

  render() {
    return (
      <div>
        <h1>Transaction History</h1>
        {this.state.payments.reverse().map(({email, amount, currency, createdAt}, i) =>
          <TransactionItem key={i} email={email} amount={amount} currency={currency} createdAt={createdAt}/>)}
      </div>
    )
  }
}

export default TransactionHistoryView;
