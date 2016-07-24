export default function TransactionItem({amount, email}) {
  return (
      <div>
        <h5>Transaction Item</h5>
        <div>
          <span>{amount}</span>
          <span>{email}</span>
        </div>
      </div>
    )
}
