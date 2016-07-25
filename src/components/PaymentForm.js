import { currencyToSymbol } from '../utils';

export default function PaymentForm(props) {
  const {
    email,
    emailValidated,
    amount,
    amountValidated,
    message,
    category,
    sent,
    submitted,
    currency,
    handleChange,
    clearForm,
    validateEmail,
    validateAmount,
    submitPayment,
  } = props;

  const symbol = currencyToSymbol(currency);

  const emailValidation = emailValidated === false ?
    <div className="email-validated">Please enter a valid email: example@gmail.com</div> : '';

  const amountValidation = amountValidated === false ?
    <div className="amount-validated">Please enter a valid amount: x.xx</div> : '';

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
          {emailValidation}
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
        {amountValidation}
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
          checked={category === 'Personal'}
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
          checked={category === 'Business'}
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
