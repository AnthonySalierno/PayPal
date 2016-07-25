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
    submitPayment,
  } = props;

  const symbol = currencyToSymbol(currency);

  const emailValidation = emailValidated === false ?
    <div className="email-not-validated">Please enter a valid email: example@gmail.com</div> :
    <div className="email-validated">Almost there!</div>;

  const amountValidation = amountValidated === false ?
    <div className="amount-not-validated">Please enter a valid amount: x.xx</div> :
    <div className="amount-validated">Keep going!</div>;

  return (
    <div>
      <div className="email-input">
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => handleChange('email', e) }
        />
        <span className="email-payee">To:</span>
        {emailValidation}
      </div>
      <div className="currency-input">
        <input
          type="text"
          maxLength="10"
          name="currency"
          placeholder='0.00'
          onChange={e => handleChange('amount', e) }
        />
        <span className="currency-type">{symbol}</span>

        <select className="currency-dropdown" onChange={(e) => handleChange('currency', e)} value={currency}>
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
      <button className="clear-form" onClick={clearForm}>Clear</button>
      <button className="submit-payment" onClick={submitPayment}>Next</button>
    </div>
  )
}
