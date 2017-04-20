import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { refreshLoggedInData, fetchProfile } from './actions'
import Login from './components/Login/Index.js'
import Dashboard from './components/dashboards'
import Profile from './components/profiles'
import Gallery from './components/Gallery/Index.js'
import Logout from './components/Logout'
import Setting from './components/setting'
import Navigation from './components/Navigation'
import Chat from './components/Chat'
import Upload from './components/Upload2'
import Friend from './components/Friends'
// import Upload from './components/Upload2'
import Notifications from './components/Notification'
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
        <div>
          <Navigation />
          <Component {...props} />
        </div>
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
    this.props.fetchProfile()
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.loggedIn !== nextProps.loggedIn) {
      this.forceUpdate()
    }
  }

  render () {
    return (
      <Router>
        <div>
          <PrivateRoute exact path='/' component={Dashboard} />
          <PrivateRoute path='/upload' component={Upload} />
          <PrivateRoute path='/chat' component={Chat} />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/friend/:id' component={Friend} />
          <PrivateRoute path='/gallery' component={Gallery} />
          <PrivateRoute path='/logout' component={Logout} />
          <PrivateRoute path='/setting' component={Setting} />
          <PrivateRoute path='/notifications' component={Notifications} />
          {/*<PrivateRoute path='/' component={Dashboard} />*/}
        </div>
      </Router>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ refreshLoggedInData, fetchProfile }, dispatch)
}

function mapStateToProps (state) {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
