import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/dashboards/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard/>
      </div>
    )
  }
}

export default App;
