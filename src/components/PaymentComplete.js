import { Link } from 'react-router';

export default function PaymentComplete({symbol, amount, currency, email}) {
  return (
    <div>
      <p>{`You have sent ${symbol}${amount} ${currency} to ${email}!`}</p>
      <Link to="/send-money">
        <button>Send Money</button>
      </Link>
      <Link to="/transaction-history">
        <button>Transaction History</button>
      </Link>
    </div>
  )
}
