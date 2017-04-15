import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Dashboard from './components/dashboards'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Dashboard/>
      </div>
    )
  }
}

export default App
