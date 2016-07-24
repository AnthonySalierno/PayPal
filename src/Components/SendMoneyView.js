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
    };

    this.state = this.default;

    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.submitPayment = this.submitPayment.bind(this);
  }

  handleChange(stateProp, event) {
    const newState = {};
    newState[stateProp] = event.target.value;
    this.setState(newState);
  }

  clearForm() {
    this.setState(this.default);
  }

  submitPayment() {
    const {email, amount, category, currency} = this.state;
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
    }).then(res => console.log(res))
    this.clearForm();
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
            $
            <input
              type="text"
              name="currency"
              value={this.state.amount}
              onChange={e => this.handleChange('amount', e) }
            />
            <select onChange={e => this.handleChange('currency', e) }>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="jpy">JPY</option>
            </select>
          </div>
          <div>
            Message (optional):
            <input
              className="email-input"
              type="text"
              name="emailaddress"
              value={this.state.message}
              onChange={(e) => this.handleChange('message', e) }
            />
          </div>
          <div>
            <input type="radio" name="send-to" value="person"/>I'm sending money to family or friends<br/>
            <input type="radio" name="send-to" value="business"/>I'm paying for goods or services<br/>
          </div>
          <button onClick={this.clearForm}>Clear</button>
          <button onClick={this.submitPayment}>Next</button>
      </div>
    )
  }
}

export default SendMoneyView;
