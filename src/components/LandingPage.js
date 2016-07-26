import React from 'react';
import { Link } from 'react-router';

import LandingButton from './LandingButton';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="sub-title">UIE Take Home Exercise</h1>
        <div className="container">
          <Link to='send-money' className="image-link left-link">
            <LandingButton
              buttonName={'Send Money'}
              imgSrc={'/assets/send-money.png'}
              imgAlt={'Send Money'}
            />
          </Link>
          <Link to='transaction-history' className="image-link right-link">
            <LandingButton
              buttonName={'Transaction History'}
              imgSrc={'/assets/transaction-history.png'}
              imgAlt={'Transaction History'}
            />
          </Link>
        </div>
      </div>
    )
  }
}

export default LandingPage;
