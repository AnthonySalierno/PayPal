import { currencyToSymbol } from '../utils';

export default function PaymentForm(props) {
  const {
    email,
    amount,
    message,
    category,
    sent,
    submitted,
    currency,
    handleChange,
    clearForm,
    validateEmail,
    validateAmount,
    submitPayment
  } = props;

  const symbol = currencyToSymbol(currency);

  return (
    <div>
      <div>
        To:
          <input
            className="email-input"
            type="text"
            name="email-address"
            value={email}
            onChange={(e) => handleChange('email', e) }
          />
      </div>
      <div className="currency-input">
        <input
          type="number"
          name="currency"
          value={amount}
          onChange={e => handleChange('amount', e) }
        />
        <span className="currency-type">{symbol}</span>
        <select onChange={(e) => handleChange('currency', e)} value={currency}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
        </select>
      </div>
      <div>
        <textarea
          placeholder="Message (optional):"
          className="email-input"
          type="text"
          name="email-address"
          value={message}
          onChange={(e) => handleChange('message', e) }
        />
      </div>
      <div>
        <input
          id="radio1"
          className="radio-item"
          type="radio"
          name="send-to"
          value="Personal"
          onChange={e => handleChange('category', e) }
        />
        <label className="label-item" htmlFor="radio1">
          <img src="assets/send-money-personal.png"/>
        </label>
        <input
          id="radio2"
          className="radio-item"
          type="radio"
          name="send-to"
          value="Business"
          onChange={e => handleChange('category', e) }
        />
        <label className="label-item" htmlFor="radio2">
          <img src="assets/send-money-business.png"/>
        </label>
      </div>
      <button onClick={clearForm}>Clear</button>
      <button onClick={submitPayment}>Next</button>
    </div>
  )
}
