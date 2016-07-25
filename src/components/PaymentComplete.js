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
    <div>
      <p>{`You have sent ${symbol}${amount} ${currency} to ${email}!`}</p>
      <Link to="/send-money">
        <button className="send-more-money" onClick={clearForm}>SendMoney</button>
      </Link>
      <Link to="/transaction-history">
        <button className="view-transaction-history">Transaction History</button>
      </Link>
    </div>
  )
}
