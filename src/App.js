import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import Calculator from './components/Calculator'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        <Calculator />
      </div>
    );
  }
}

export default App;
