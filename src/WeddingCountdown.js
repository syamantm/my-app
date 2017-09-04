import React, { Component } from 'react';
import Countdown from 'react-cntdwn';
import logo from './wedding.png';
import './App.css';


class WeddingCountdown extends Component {
    constructor(props){
        super(props)
        this.end = {		day: 'DD',
              hour: 'HH',
              minute: 'MM',
              second: 'SS'}

    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Mukherjee</h2>
                </div>

                <p className="App-intro">

                    <Countdown className="timer" targetDate={new Date('November 28, 2017')}
                       interval={1000}
                       format = {this.end}
                       timeSeparator={'  '}
                       leadingZero
                       />
                </p>
            </div>
        );
    }
}

export default WeddingCountdown;