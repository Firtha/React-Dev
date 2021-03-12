import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import Clock from './clock.js';

import './../index.css';

export default class CustomNavbar extends React.Component {
    render() {
      return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#wallets">Wallets</Nav.Link>
                    <Nav.Link href="#coins">Coins</Nav.Link>
                </Nav>
                <Button><Clock /></Button>
            </Navbar>
        </div>
      );
    }
  }