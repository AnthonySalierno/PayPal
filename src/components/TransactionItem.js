export default function TransactionItem({amount, email, currency, createdAt}) {
  return (
    <div className="transaction-record">
      <span className="transaction-record payment">{amount + " " + currency}</span>
      <span className="transaction-record email">{email}</span>
      <span className="transaction-record created-at">{createdAt}</span>
    </div>
  )
}
