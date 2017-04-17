import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { refreshLoggedInData } from './actions'
import Login from './components/Login/Index.js'
import Dashboard from './components/dashboards'
import Profile from './components/profiles'
import Gallery from './components/Gallery/Index.js'
import Navigation from './components/Navigation'
// import Setting from './components/setting'
import './App.css'

const checkAuth = () => {
  if (window.localStorage.getItem('token') !== null && window.localStorage.getItem('userDetail') !== null) {
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
  constructor (props) {
    super(props)
    this.state = {
      redirectLogin: false
    }
  }
  componentDidMount () {
    // if (!(window.localStorage.getItem('token') !== null || window.localStorage.getItem('token') !== '')) {
    //   this.props.refreshLoggedInData()
    //   console.log(this.props.loggedIn)
    // }
  }
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/gallery' component={Gallery} />
          {/*<PrivateRoute path='/' component={Dashboard} />*/}
        </div>
      </Router>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ refreshLoggedInData }, dispatch)
}

function mapStateToProps (state) {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
