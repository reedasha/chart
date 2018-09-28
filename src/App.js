import React, { Component } from 'react';
import './App.css';
import PieChartComponent from './components/PieChartComponent';
import LineChartComponent from './components/LineChartComponent';
import MultipleChartComponent from './components/MultipleLineChartComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
          <MultipleChartComponent/>
          <PieChartComponent/>
          <LineChartComponent/>
      </div>
    );
  }
}

export default App;
