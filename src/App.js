import React, { Component } from 'react';
import './App.css';

import Clock from './components/Counter';
import WindowSize from './components/WindowSize';
import Calculator from './components/Calculator'
import Joke from './components/Joke';
import AnalogClock from './components/AnalogClock/index';

import TimeContextProvider from './components/AnalogClock/TimeContextProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimeContextProvider>
          <Clock />
          <WindowSize />
          <Joke />
          <AnalogClock />
          <Calculator />
        </TimeContextProvider>
      </div>
    );
  }
}

export default App;
