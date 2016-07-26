import { Link } from 'react-router';

function App(props) {
  return (
    <div>
      <Link to="/">
        <img className="paypal-logo" src='assets/paypal-logo.png'/>
      </Link>
      {props.children}
    </div>
  )
}

export default App;
