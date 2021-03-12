import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Wallets from './../storage/wallets';

import './../index.css';

export default class Wallet extends React.Component {
    constructor(props) {
        super(props);

        var wallet = ""

        var wall, count = 0;
        for(wall in Wallets.wallets) {
            if(Wallets.wallets.hasOwnProperty(wall)) {
                count++;
            }
        }
        if(count > 0){
            wallet = Wallets.wallets[0]
        }

        this.state = {wallets: Wallets.wallets, selectedWallet: wallet, showMyForm: false, showMyFormBis: false};

        this.handleClick = this.handleClick.bind(this);
        this.handleClickBis = this.handleClickBis.bind(this);
        this.selectWallet = this.selectWallet.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            showMyForm: !state.showMyForm
        }));
    }

    handleClickBis() {
        this.setState(state => ({
            showMyFormBis: !state.showMyFormBis
        }));
    }

    selectWallet(e) {
        this.setState(state => ({
            selectedWallet: e.target.dataset.wallet
        }));
    }
  
    render() {
      return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h4>Registered wallets</h4>

                        <ul>
                            {
                                this.state.wallets.map(function(wallet){
                                    return <li key={ wallet.name }>
                                            { wallet.name }
                                            <Button variant="outline-info" /*data-wallet={wallet} onClick={this.selectWallet}*/>
                                                Select
                                            </Button>
                                        </li>;
                                })
                            }
                        </ul>

                        { 
                            this.state.showMyForm ? 
                                <div>
                                    <Button variant="outline-info" onClick={this.handleClick}>
                                        Hide
                                    </Button>
                                    <Form>
                                        <Form.Group controlId="formNewWallet">
                                            <Form.Label>New Wallet Name</Form.Label>
                                            <Form.Control type="text" placeholder="MyLovelyWallet ?" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                            : 
                                <Button variant="outline-info" onClick={this.handleClick}>
                                    Create new
                                </Button>
                        }
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                                <h2>{this.state.selectedWallet.name}</h2>
                            </div>
                        </div>
                        {
                            this.state.selectedWallet.holds.map(function(hold){
                                return <div className="row">
                                        <div className="col-4 offset-2">
                                            { hold.coin }
                                        </div>
                                        <div className="col-5 offset-1">
                                            { hold.amount }
                                            <br/>
                                            { hold.price }
                                        </div>
                                    </div>;
                            })
                        }

                        { 
                            this.state.showMyFormBis ? 
                                <div>
                                    <Button variant="outline-info" onClick={this.handleClickBis}>
                                        Hide
                                    </Button>
                                    <Form>
                                        <Form.Group controlId="formNewCoin">
                                            <Form.Label>Coin</Form.Label>
                                            <Form.Control type="text" placeholder="BTC/USDT ?" />
                                        </Form.Group>
                                        <Form.Group controlId="formNewPrice">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control type="text" placeholder="48000" />
                                        </Form.Group>
                                        <Form.Group controlId="formNewAmount">
                                            <Form.Label>Amount</Form.Label>
                                            <Form.Control type="text" placeholder="0.5" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Register
                                        </Button>
                                    </Form>
                                </div>
                            : 
                                <Button variant="outline-info" onClick={this.handleClickBis}>
                                    Register transaction
                                </Button>
                        }
                    </div>
                </div>
            </div>

        </div>
      );
    }
  }