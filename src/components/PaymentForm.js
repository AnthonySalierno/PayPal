import { currencyToSymbol } from '../utils';

export default function PaymentForm(props) {
  const {
    email,
    emailValidated,
    matches,
    amount,
    amountValidated,
    message,
    category,
    sent,
    submitted,
    currency,
    handleChange,
    handleEmailInput,
    clearForm,
    submitPayment,
  } = props;

  const symbol = currencyToSymbol(currency);

  const emailValidation = emailValidated === false ?
    <div className="invalid">Please enter a valid email: example@gmail.com</div> :
    <div className="valid">Keep going!</div>;

  const amountValidation = amountValidated === false ?
    <div className="invalid">Please enter a valid amount: x.xx</div> :
    <div className="valid">Almost there!</div>;

  const showMatches = matches.map((object) => {
    return <div key={object.id}>{object.firstName}</div>
  })

  return (
    <div className="container">
      <div className="payment-input-container">
        <span>To:</span>
        <input
          className="payment-input"
          type="text"
          name="email"
          value={email}
          onChange={(e) => handleChange('email', e) }
        />
        {emailValidation}
        {}
      </div>
      <div className="payment-input-container">
        <span>   {symbol}</span>
        <input
          className="payment-input"
          type="text"
          maxLength="10"
          name="currency"
          onChange={e => handleChange('amount', e) }
          value={amount}
        />
        <select className="currency-select" onChange={(e) => handleChange('currency', e)} value={currency}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
        </select>
        {amountValidation}
        {showMatches}
      </div>
      <div className="payment-input-container">
        <textarea
          className="message-text"
          placeholder="Message (optional):"
          type="text"
          name="email-address"
          value={message}
          onChange={(e) => handleChange('message', e) }
        />
      </div>
      <div className="payment-input-container">
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
          <img className="friends-image" src="assets/send-money-personal.png"/>
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
          <img className="business-image" src="assets/send-money-business.png"/>
        </label>
      </div>
      <button className="clear-form" onClick={clearForm}>Clear</button>
      <button className="submit-payment" onClick={submitPayment}>Next</button>
    </div>
  )
}
