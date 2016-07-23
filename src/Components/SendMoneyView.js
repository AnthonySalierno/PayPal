import React from 'react';

class SendMoneyView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      moneySent: false,
      currency: 'USD',
    };
  }

  render() {
    return (
      <div>
        <h1>Send Money</h1>
        <form>
          <div>
            To:<input className="email-input" type="text" name="email-address"/>
          </div>
          <div className="currency-input">
            $<input type="text" name="currency"/>
            <select>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="jpy">JPY</option>
            </select>
          </div>
          <div>
            Message (optional):<input className="email-input" type="text" name="emailaddress"/>
          </div>
          <div>
            <input type="radio" name="send-to" value="person"/>I'm sending money to family or friends<br/>
            <input type="radio" name="send-to" value="business"/>I'm paying for goods or services<br/>
          </div>
        </form>
      </div>
    )
  }
}

export default SendMoneyView;
