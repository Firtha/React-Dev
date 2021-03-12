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

        this.state = {wallets: Wallets.wallets, selectedWallet: wallet, showMyForm: false};

        this.handleClick = this.handleClick.bind(this);
        this.selectWallet = this.selectWallet.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            showMyForm: !state.showMyForm
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

                        { 
                            this.state.showMyForm ? 
                                <div>
                                    <Button variant="outline-info" onClick={this.handleClick}>
                                        Hide
                                    </Button>
                                    <Form>
                                        <Form.Group controlId="formNewWallet">
                                            <Form.Label>New Wallet</Form.Label>
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
                    </div>
                </div>
            </div>

        </div>
      );
    }
  }