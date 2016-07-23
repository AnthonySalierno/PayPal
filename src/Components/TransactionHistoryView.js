import React from 'react';

import TransactionItem from './TransactionItem';

class TransactionHistoryView extends React.Component {
  render() {
    return (
      <div>
        <h1>Transaction History</h1>
        <TransactionItem />
        <TransactionItem />
      </div>
    )
  }
}

export default TransactionHistoryView;
