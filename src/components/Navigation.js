import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import './Navigation.css'
import { Link } from 'react-router-dom'
axios.defaults.headers.common['Authorization'] = 'AnotherTestSecretToken'
const URL = 'http://localhost:3001/api'

class Navigation extends Component {

  constructor (props) {
    super(props)
    this.state = {
      notificationCount: 0,
      searchInput: '',
      userProfile: JSON.parse(window.localStorage.getItem('userProfile'))
    }
  }

  componentDidMount () {
    const id = this.state.userProfile.id
    axios.get(`${URL}/profiles/${id}/notifications/count`)
    .then(data => {
      this.setState({
        notificationCount: data.data.count
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  autoComplete () {
    axios.get(`${URL}/profiles/search-friend/${this.state.searchInput}`)
    .then(data => {
      let res = data.data.friendSearch
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  searchInputChange (e) {
    this.setState({searchInput: e.target.value})
    if (this.state.searchInput.length >= 2) {
      this.autoComplete()
    }
  }

  searchInputEnter (e) {
    if (e.key === 'Enter') {
      // Do other things.
      // Redirect to search page.
      console.log('enter fired')
    }
  }

  render () {
    return (
      <div className='Navigation'>
        <nav className='nav has-shadow navigation'>
          <div className='container'>
            <div className='nav-left search-left'>
              <a className='nav-item'>
                <img src='http://bulma.io/images/bulma-logo.png' alt='Bulma logo' />
              </a>
              <div className='nav-item search'>
                <p className='control'>
                  <input
                    onChange={this.searchInputChange.bind(this)}
                    onKeyPress={this.searchInputEnter.bind(this)}
                    className='input'
                    id='search'
                    type='text'
                    placeholder='Find something' />
                </p>
              </div>
            </div>
            <div className='nav-right nav-menu'>

              <Link to={'/'} className='nav-item is-tab is-hidden-mobile is-active' style={{color: 'black'}}>Home</Link>

              <Link className='nav-item is-tab is-hidden-mobile' to={'/profile'}>
                <figure className='image is-16x16' >
                  <img src='http://bulma.io/images/jgthms.png' alt='profilepicture' />
                </figure>
                {this.state.userProfile.fullname}
              </Link>

              {/*<a className="nav-item is-tab is-hidden-mobile" style={{color:"black"}}>*/}
              {/*</a>*/}
              <Link className='nav-item is-tab is-hidden-mobile' to='/gallery'>
                Gallery
              </Link>
              <a className='nav-item is-tab is-hidden-mobile level-item' style={{color: 'black'}}>
                <span className='icon'>
                  <i className='fa fa-bell'></i>
                </span>
              </a>
              <div className='dropdown'>
                <a className='nav-item is-tab is-hidden-mobile level-item dropbtn' style={{color: 'black'}}>
                  <span className='icon'>
                    <i className='fa fa-gear'></i>
                  </span>
                </a>
                <div className="dropdown-content">
                  <Link to={'/setting'} >Update Profile</Link>
                  <Link to={'/logout'}>Logout</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <progress className='progress is-small is-success' value='100' max='100'>100%</progress>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, null)(Navigation)
