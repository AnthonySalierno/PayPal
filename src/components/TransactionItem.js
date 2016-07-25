export default function TransactionItem({amount, email, currency, createdAt}) {
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString('en-us');

  return (
    <div className="transaction-record">
      <span className="transaction-record-payment">{`${amount} ${currency}`}</span>
      <span className="transaction-record-email">{email}</span>
      <span className="transaction-record-created-at">{formattedDate}</span>
    </div>
  )
}
