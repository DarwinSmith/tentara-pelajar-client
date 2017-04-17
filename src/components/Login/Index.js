import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login.js'
import Register from './Register.js'

class Index extends Component {
  constructor () {
    super()
    this.state = {
      redirectLogin: false
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.loggedIn.token === '' && prevProps.loggedIn.user === '') {
      window.localStorage.setItem('token', this.props.loggedIn.token)
      window.localStorage.setItem('userDetail', JSON.stringify(this.props.loggedIn.user))
      window.localStorage.setItem('userProfile', JSON.stringify(this.props.loggedIn.data))
      this.setState({
        redirectLogin: true
      })
    } else if (prevProps.loggedIn.isLogin === true) {
      // <Route exact path="/" render={() => {
      //       return <Redirect to={{pathname: '/'}} />
      //   }}/>
      return <Redirect to={{pathname: '/'}} />
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
          <Register />
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
