import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <nav className="nav has-shadow box">
          <div className="container">
            <div className="nav-left">
              <div className="field is-horizontal">
                <label className="label login email">Email</label>
                <p className="control has-icon margin ">
                  <input className="input" type="text" />
                  <span className="icon">
                    <i className="fa fa-envelope"></i>
                  </span>
                </p>
                <label className="label login password">Password</label>
                <p className="control has-icon margin">
                  <input className="input" type="password" placeholder="" />
                  <span className="icon">
                    <i className="fa fa-key"></i>
                  </span>
                </p>
                <a className="button is-primary button-login">Login</a>
              </div>
            </div>
            <span className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className="nav-right nav-menu">
              <a className="nav-item">
                <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Login;
