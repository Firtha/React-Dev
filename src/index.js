import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock.js';
import './index.css';

export class Main extends React.Component{
  render(){
    return(
        <Clock />
    );
  }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);