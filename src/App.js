import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import firebase from 'firebase'

import Login from './components/Login/Index.js'

class App extends Component {

  constructor () {
    super()
    this.state = {
      redirectLogin: false
    }
  }

  componentWillMount () {
    let token = localStorage.getItem('token')
    console.log(token)
    if (token !== null) {
      firebase.auth().signInWithCustomToken(token)
      .then(user => {
        console.log(user)
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      this.setState({
        redirectLogin: true
      })
    }
  }

  render () {
    return (
      <Router>
        <div>
          {
            this.state.redirectLogin ? <Redirect to={{pathname: '/login'}} /> : ''
          }
          <Route path='/' />
          <Route path='/login' component={Login} />
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
