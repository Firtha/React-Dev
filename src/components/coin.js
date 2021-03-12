import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Coins from './../storage/coins';

import './../index.css';

export default class Coin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {coins: Coins.coins, newCoin: "", isToggleOn: false};

      this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });

        var newCoins = []

        this.state.coins.forEach(function(coin){
            var maxVal = 0
            switch(coin.name){
                case "BTC/USDT":
                    maxVal = 800
                    break;
                
                case "ETH/USDT":
                    maxVal = 20
                    break;

                default:
                    maxVal = 10
                    break;
            }
            var randomVal = (Math.floor(Math.random() * (maxVal - 10)) + 10) / 10
            var direction = Math.floor(Math.random() * Math.floor(2))
            if(direction % 2 == 0){
                randomVal *= -1
            }
            console.log(randomVal)
            coin.currentValue += randomVal
            coin.currentValue = coin.currentValue

            coin.percentage = ((coin.currentValue / coin.startValue) - 1) * 100
            coin.percentage = coin.percentage.toFixed(3)
            newCoins.push(coin)
        });

        this.setState({
            coins: newCoins
        });
    }

    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
    }
  
    render() {
      return (
        <div>
            <ul>
                {
                    this.state.coins.map(function(coin){
                        return <li key={ coin.name }>{ coin.name }: { coin.percentage }%<br/>{ coin.currentValue }</li>;
                    })
                }
            </ul>

            <Form>
                <Form.Group controlId="formNewCoin">
                    <Form.Label>New Coin to observ ?</Form.Label>
                    <Form.Control type="text" placeholder="BTC/USDT ?" />
                    <Form.Text className="text-muted">
                        We will retrieve the current value of this coin on platforms that list it.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.handleClick}>
                    Submit
                </Button>
            </Form>
        </div>
      );
    }
  }