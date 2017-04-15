import React, { Component } from 'react'
import firebase from 'firebase'
import './Login.css'

class Login extends Component {

  constructor () {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChangeEmail (event) {
    this.setState({
      email: event.target.value
    })
  }

  handleChangePassword (event) {
    this.setState({
      password: event.target.value
    })
  }

  handleClickLogin () {
    const { email, password } = this.state

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      user.getToken().then(token => {
        localStorage.setItem('token', token)
        localStorage.setItem('userDetail', JSON.stringify(user))
        return {user, token}
      })
    })
    .catch(err => {
      return err
    })
  }

  render () {
    return (
      <div className='Login'>
        <nav className='nav has-shadow box'>
          <div className='container'>
            <div className='nav-left'>
              <div className='field is-horizontal'>
                <label className='label login email'>Email</label>
                <p className='control has-icon margin '>
                  <input onChange={this.handleChangeEmail.bind(this)} value={this.state.email} className='input' type='text' />
                  <span className='icon'>
                    <i className='fa fa-envelope' />
                  </span>
                </p>
                <label className='label login password'>Password</label>
                <p className='control has-icon margin'>
                  <input onChange={this.handleChangePassword.bind(this)} value={this.state.password} className='input' type='password' placeholder='' />
                  <span className='icon'>
                    <i className='fa fa-key' />
                  </span>
                </p>
                <a className='button is-primary button-login'>Login</a>
              </div>
            </div>
            <span className='nav-toggle'>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className='nav-right nav-menu'>
              <a className='nav-item'>
                <img src='http://bulma.io/images/bulma-logo.png' alt='Bulma logo' />
              </a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Login
