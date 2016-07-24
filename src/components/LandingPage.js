import React from 'react';
import { Link } from 'react-router';

import LandingButton from './LandingButton';

class LandingPage extends React.Component {
  render() {
    return (
      <div id="button-container">
        <h1>PayPal UI Exercise</h1>
        <Link to='send-money'>
          <LandingButton
            buttonName={'Send Money'}
            imgId={'send-money-button'}
            // imgSrc={'./assets/send-money.png'}
            // imgAlt={'Send Money'}
          />
        </Link>
        <Link to='transaction-history'>
          <LandingButton
            buttonName={'Transaction History'}
            imgId={'transaction-history-button'}
            // imgSrc={'./assets/transaction-history.png'}
            // imgAlt={'Transaction History'}
          />
        </Link>
      </div>
    )
  }
}

export default LandingPage;
