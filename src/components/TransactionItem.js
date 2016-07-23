import React from 'react';

class TransactionItem extends React.Component {
  render() {
    return (
      <div>
        <h5>Transaction Item</h5>
        <div>
          <span>Date</span>
          <span>Name</span>
          <span>Amount</span>
        </div>
      </div>
    )
  }
}

export default TransactionItem;
