import React, { Component } from 'react';
import Search from './components/Search/Index'
import Navigation from './components/Navigation'
import Setting from './components/setting'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Setting />
      </div>
    );
  }
}

export default App;
