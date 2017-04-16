import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loginFirebaseAPI } from '../../actions'
import './Login.css'

class Login extends Component {

  constructor (props) {
    super(props)
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
    this.props.loginFirebaseAPI(email, password)
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
                <button onClick={this.handleClickLogin.bind(this)} className='button is-primary button-login'>Login</button>
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

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ loginFirebaseAPI }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
