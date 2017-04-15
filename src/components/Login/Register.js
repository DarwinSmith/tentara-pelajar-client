import React, { Component } from 'react'
import firebase from 'firebase'
import './Register.css'

class Register extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      localError: ''
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

  handleChangeConfirmPassword (event) {
    this.setState({
      confirmPassword: event.target.value
    })
  }

  handleClickRegister () {
    const { email, password } = this.state

    if (this.state.confirmPassword !== password) {
      return this.setState({
        localError: 'Password and Confirm Password not same'
      })
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
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
      <div className='Register'>
        <div className='columns'>
          <div className='column is-6 register'>
            <h1 className='title is-1'>Register Now</h1>
            <div className='field'>
              <label className='label'>Email</label>
              <p className='control '>
                <input onChange={this.handleChangeEmail.bind(this)} value={this.state.email} className='input' type='text' placeholder='Email' />
              </p>
            </div>
            <div className='field'>
              <label className='label'>Password</label>
              <p className='control '>
                <input onChange={this.handleChangePassword.bind(this)} value={this.state.password} className='input' type='password' placeholder='Password' />
              </p>
            </div>
            <div className='field'>
              <label className='label'>Confirm Password</label>
              <p className='control '>
                <input onChange={this.handleChangeConfirmPassword.bind(this)} value={this.state.confirmPassword} className='input' type='password' placeholder='Password' />
              </p>
            </div>
            <div className='field is-grouped'>
              <p className='control'>
                <button onClick={this.handleClickRegister.bind(this)} className='button is-primary'>Register</button>
              </p>
            </div>
          </div>
          <div className='column is-6 summary'>
            <h1 className='title is-1'>Tentara Pelajar</h1>
            <p>Sosial Media hasil karya anak bangsa, media generasi muda sekolah.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
