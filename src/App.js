import React, { Component } from 'react';
import Search from './components/Search/Index'
import Navigation from './components/Navigation'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Search />
      </div>
    );
  }
}

export default App;
