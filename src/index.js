import React from 'react';
import ReactDOM from 'react-dom';

import Coin from './components/coin.js';
import CustomNavbar from './components/navbar.js';
import Wallet from './components/wallet.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export class Main extends React.Component{

  constructor(props) {
    super(props);
    this.state = {title: "React App"};
  }

  /*  API CALLS UNUSED CAUSE OF CORS ERROR
  componentDidMount() {
    var request = new Request('https://api.kraken.com/0/public/Time');
    const options = {
        method: 'GET',
        headers: new Headers({'Access-Control-Allow-Origin': '*'}),
        mode: 'no-cors'
    };

    fetch(request, options)
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
        console.log(data)
      })
      .catch(console.log)
  }*/

  componentDidMount() {

  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h1>
              {this.state.title}
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CustomNavbar />
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <Wallet />
          </div>
          <div className="col-2">
            <Coin />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);