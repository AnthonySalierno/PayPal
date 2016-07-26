import { Link } from 'react-router';

import { currencyToSymbol } from '../utils';

export default function PaymentComplete(props) {
  const {
    amount,
    currency,
    email,
    sent,
    clearForm
  } = props;

  const symbol = currencyToSymbol(currency);

  return (
    <div className="container">
      <p className="payment-confirmation">{`You have sent ${symbol}${amount} ${currency} to ${email}!`}</p>
      <Link to="/send-money">
          <button className="send-more-money" onClick={clearForm}>Send Money</button>
      </Link>
      <Link to="/transaction-history">
        <button className="view-transaction-history">Transaction History</button>
      </Link>
    </div>
  )
}
