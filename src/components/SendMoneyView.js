import React from 'react';

import PaymentForm from './PaymentForm';
import PaymentComplete from './PaymentComplete';

class SendMoneyView extends React.Component {
  constructor(props) {
    super(props)
    this.default = {
      email: '',
      amount: '0.00',
      message: '',
      category: '',
      sent: false,
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
      }).then((res) => this.setState({
        sent: true,
      }));
    }
  }

  render() {
    const component = this.state.sent ?
      <PaymentComplete
        { ...this.state }
        handleChange={this.handleChange}
        clearForm={this.clearForm}
        validateEmail={this.validateEmail}
        validateAmount={this.validateAmount}
        submitPayment={this.submitPayment}
      /> :
      <PaymentForm
        { ...this.state }
        handleChange={this.handleChange}
        clearForm={this.clearForm}
        validateEmail={this.validateEmail}
        validateAmount={this.validateAmount}
        submitPayment={this.submitPayment}
      />

    return (
      <div>
        <h1>Send Money</h1>
        {component}
      </div>
    )
  }
}

export default SendMoneyView;
