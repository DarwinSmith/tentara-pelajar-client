import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login.js'
import Register from './Register.js'

class Index extends Component {
  constructor () {
    super()
    this.state = {
      redirectLogin: false,
      errorLogin: ''
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps.loggedIn);
    if ((nextProps.loggedIn.token !== '' || nextProps.loggedIn.token !== null) && (nextProps.loggedIn.user !== '' || nextProps.loggedIn.user !== null)) {
      window.localStorage.setItem('token', nextProps.loggedIn.token)
      window.localStorage.setItem('userDetail', JSON.stringify(nextProps.loggedIn.user))
      window.localStorage.setItem('userProfile', JSON.stringify(nextProps.loggedIn.data))
      this.setState({
        redirectLogin: true
      })
    } else if (nextProps.loggedIn.error !== '') {
      this.setState({
        errorLogin: nextProps.loggedIn.error
      })
    } else {
      return 0
    }
  }

  render() {
    if (this.state.redirectLogin) {
      return <Redirect to='/' />
    } else {
      return (
        <div className="Index">
          <Login />
          <Register displayError={this.state.errorLogin} />
        </div>
      );
    }
  }
}

function mapStateToProps (state) {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, null)(Index);
