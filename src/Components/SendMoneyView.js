import React from 'react';

class SendMoneyView extends React.Component {
  constructor(props) {
    super(props)
    this.default = {
      email: '',
      amount: '0.00',
      message: '',
      category: 'Personal',
      moneySent: false,
      currency: 'USD',
      symbol: '$',
    };

    this.state = this.default;

    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.submitPayment = this.submitPayment.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  handleChange(stateProp, event) {
    const newState = {};
    newState[stateProp] = event.target.value;
    this.setState(newState);
  }

  clearForm() {
    this.setState(this.default);
  }

  validateEmail() {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(this.state.email);
  }

  validateAmount() {
    const regEx = /^\d+(?:\.\d{0,2})$/;
    return regEx.test(this.state.amount);
  }

  submitPayment() {
    const {email, amount, category, currency} = this.state;
    const emailValidation = this.validateEmail();
    const amountValidation = this.validateAmount();
    if (emailValidation && amountValidation) {
      fetch('/send-money', {
        method: 'POST',
        body: JSON.stringify({
          email,
          amount,
          category,
          currency,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => this.clearForm());
    }
  }

  render() {
    return (
      <div>
        <h1>Send Money</h1>
          <div>
            To:
              <input
                className="email-input"
                type="text"
                name="email-address"
                value={this.state.email}
                onChange={(e) => this.handleChange('email', e) }
              />
          </div>
          <div className="currency-input">
            <input
              type="number"
              name="currency"
              value={this.state.amount}
              onChange={e => this.handleChange('amount', e) }
            />
            <span className="currency-type">{this.state.symbol}</span>
            <select onChange={(e) => this.handleChange('currency', e)} value={this.state.currency}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
          <div>
            Message (optional):
            <input
              className="email-input"
              type="text"
              name="email-address"
              value={this.state.message}
              onChange={(e) => this.handleChange('message', e) }
            />
          </div>
          <div>
            <input type="radio" name="send-to" value="person"/>I'm sending money to family or friends
            <input type="radio" name="send-to" value="business"/>I'm paying for goods or services
          </div>
          <button onClick={this.clearForm}>Clear</button>
          <button onClick={this.submitPayment}>Next</button>
      </div>
    )
  }
}

export default SendMoneyView;
