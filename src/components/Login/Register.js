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
              ? <article className='message is-danger'>
                <div className='message-header'>
                  <p><strong>Ooopss Something Error</strong></p>
                  <button className='delete' onClick={this.handleCloseErrorBox.bind(this)} />
                </div>
                <div className='message-body'>
                  {this.props.displayError.message}
                </div>
              </article>
              : ''
            }
            <h1 className='title is-1'>Daftar Sekarang</h1>
            <div className='field'>
              <label className='label'>Nama Lengkap</label>
              <p className='control '>
                <input onChange={this.handleChangeFullname.bind(this)} value={this.state.fullname} className='input' type='text' placeholder='Nama Lengkap' />
              </p>
            </div>
            <div className='field'>
              <label className='label'>Surel</label>
              <p className='control '>
                <input onChange={this.handleChangeEmail.bind(this)} value={this.state.email} className='input' type='text' placeholder='Surel' />
              </p>
            </div>
            <div className='field'>
              <label className='label'>Sandi</label>
              <p className='control '>
                <input onChange={this.handleChangePassword.bind(this)} value={this.state.password} className='input' type='password' placeholder='Sandi' />
              </p>
            </div>
            <div className='field'>
              <label className='label'>Konfirmasi Sandi</label>
              <p className='control '>
                <input onChange={this.handleChangeConfirmPassword.bind(this)} value={this.state.confirmPassword} className='input' type='password' placeholder='Konfirmasi Sandi' />
              </p>
            </div>
            <div className='field is-grouped'>
              <p className='control'>
                <button onClick={this.handleClickRegister.bind(this)} className='button is-primary'>Daftar</button>
              </p>
            </div>
          </div>
          <div className='column is-6 summary'>
            <img style={{width:'60%', marginLeft:'15%'}} src={require("../../assets/image/Tentara-Pelajar.png")} alt="Tentara Pelajar" />
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
