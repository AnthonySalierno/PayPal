import React from 'react';

import PaymentForm from './PaymentForm';
import PaymentComplete from './PaymentComplete';
import { currencyToSymbol } from '../utils';

class SendMoneyView extends React.Component {
  constructor(props) {
    super(props)
    this.default = {
      email: '',
      emailValidated: false,
      amount: '0.00',
      amountValidated: false,
      message: '',
      category: 'Personal',
      fetching: false,
      sent: false,
      currency: 'USD',
    };

    this.state = this.default;

    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateAmount = this.validateAmount.bind(this);
    this.submitPayment = this.submitPayment.bind(this);
  }

  handleChange(stateProp, event) {
    const newState = {};
    newState[stateProp] = event.target.value;
    this.setState(newState);
    this.validateEmail();
    this.validateAmount();
  }

  clearForm() {
    this.setState(this.default);
  }

  validateEmail() {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const newEmailValidatedState = regEx.test(this.state.email);
    this.setState({
      emailValidated: newEmailValidatedState,
    })
  }

  validateAmount() {
    const regEx = /^\d+(?:\.\d{0,2})$/;
    const newAmountValidatedState = regEx.test(this.state.amount);
    this.setState({
      amountValidated: newAmountValidatedState,
    })
  }

  submitPayment() {
    const {email, amount, category, currency} = this.state;
    const emailValidated = this.state.emailValidated;
    const amountValidated = this.state.amountValidated;
    if (emailValidated && amountValidated) {
      const makePayment = () => {
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
          fetching: false,
        }));
      }

      this.setState({
        fetching: true,
      }, makePayment);

    }
  }

  render() {
    const component = this.state.sent ?
      <PaymentComplete
        { ...this.state }
      /> :
      <PaymentForm
        { ...this.state }
        handleChange={this.handleChange}
        clearForm={this.clearForm}
        validateEmail={this.validateEmail}
        validateAmount={this.validateAmount}
        submitPayment={this.submitPayment}
      />

    const spinner = this.state.fetching ?
      <div className="spinner"><img src='assets/spinner.gif'/></div> : '';

    return (
      <div>
        {spinner}
        <h1>Send Money</h1>
        {component}
      </div>
    )
  }
}

export default SendMoneyView;
