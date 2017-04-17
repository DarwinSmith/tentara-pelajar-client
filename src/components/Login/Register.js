import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { registerFirebaseAPI } from '../../actions'
import './Register.css'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
      localError: '',
      errorBox: true
    }
  }

  handleChangeFullname (event) {
    this.setState({fullname: event.target.value})
  }

  handleChangeEmail (event) {
    this.setState({email: event.target.value})
  }

  handleChangePassword (event) {
    this.setState({password: event.target.value})
  }

  handleChangeConfirmPassword (event) {
    this.setState({confirmPassword: event.target.value})
  }

  handleCloseErrorBox () {
    this.setState({ errorBox: false })
  }

  handleClickRegister () {
    const { email, password, fullname } = this.state
    if (this.state.confirmPassword !== password) {
      return this.setState({
        localError: 'Password and Confirm Password not same'
      })
    }
    this.props.registerFirebaseAPI(email, password, fullname)
  }

  render () {
    return (
      <div className='Register'>
        <div className='columns'>
          <div className='column is-6 register'>
            {
              this.props.displayError !== '' && this.state.errorBox === true
              ?
              <article className="message is-danger">
                <div className='message-header'>
                  <p><strong>Ooopss Something Error</strong></p>
                  <button className='delete' onClick={this.handleCloseErrorBox.bind(this)}></button>
                </div>
                <div className='message-body'>
                  {this.props.displayError.message}
                </div>
              </article>
              :
              ''
            }
            <h1 className='title is-1'>Register Now</h1>
            <div className='field'>
              <label className='label'>Full Name</label>
              <p className='control '>
                <input onChange={this.handleChangeFullname.bind(this)} value={this.state.fullname} className='input' type='text' placeholder='Full Name' />
              </p>
            </div>
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

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ registerFirebaseAPI }, dispatch)
}

export default connect(null, mapDispatchToProps)(Register)
