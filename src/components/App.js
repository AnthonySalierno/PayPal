import { Link } from 'react-router';

function App(props) {
  return (
    <div>
      <h1 className="title">
        <Link to="/">
          <img className="paypal-logo" src='assets/paypal-logo.png'/>
        </Link>
        UIE Take Home Exercise
      </h1>
      {props.children}
    </div>
  )
}

export default App;
