import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './components/Login/Index.js'
import Dashboard from './components/dashboards'
import Profile from './components/profiles'
import './App.css'

const checkAuth = () => {
  if (localStorage.getItem('token') !== null && localStorage.getItem('userDetail') !== null) {
    // let tokenData = jwt.decode(localStorage.getItem('token'))
    // if (tokenData.alg !== 'RS256' && tokenData.iss !== 'https://securetoken.google.com/hacktiv8-tentarapelajar' && tokenData.aud !== 'hacktiv8-tentarapelajar' && tokenData === null) {
    //   return false
    // } else {
    //   return true
    // }
    return true
  } else {
    return false
  }
}

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/login'
        }} />
      )
    )} />
)

class App extends Component {

  constructor () {
    super()
    this.state = {
      redirectLogin: false
    }
  }

  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <PrivateRoute path='/dash' component={Dashboard} />
        </div>
      </Router>
    )
  }
}

function mapStateToProps (state) {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, null)(App)
