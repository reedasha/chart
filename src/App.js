import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PieChartComponent from './components/PieChartComponent';
import LineChartComponent from './components/LineChartComponent';
import Mul

class App extends Component {
  render() {
    return (
      <div className="App">
          <PieChartComponent/>

          <LineChartComponent/>
      </div>
    );
  }
}

export default App;
