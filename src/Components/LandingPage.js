import React from 'react';

import LandingButton from './LandingButton';

class LandingPage extends React.Component {
  render() {
    return (
      <div id="button-container">
        <h1>PayPal UI Exercise</h1>
        <LandingButton
          buttonName={'Send Money'}
          imgId={'send-money-button'}
          // imgSrc={'./assets/send-money.png'}
          imgAlt={'Send Money'}
        />
        <LandingButton
          buttonName={'Transaction History'}
          imgId={'transaction-history-button'}
          // imgSrc={'./assets/transaction-history.png'}
          imgAlt={'Transaction History'}
        />
      </div>
    )
  }
}

export default LandingPage;
