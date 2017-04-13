import React, { Component } from 'react';
import Login from './Login.js'
import Register from './Register.js'

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <Login />
        <Register />
      </div>
    );
  }
}

export default Index;
