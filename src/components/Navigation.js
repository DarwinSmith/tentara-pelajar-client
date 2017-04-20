import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './Navigation.css'
import { Link } from 'react-router-dom'
import Notifications from './Notification.js'
axios.defaults.headers.common['Authorization'] = 'AnotherTestSecretToken'
const URL = 'http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api'

class Navigation extends Component {

  constructor (props) {
    super(props)
    this.state = {
      notificationCount: 0,
      showNotif: false,
      searchInput: '',
      userProfile: JSON.parse(window.localStorage.getItem('userProfile'))
    }
    this.userId = JSON.parse(window.localStorage.getItem('userProfile')).id
  }

  componentDidMount () {
    const id = this.state.userProfile.id

    let URLNotification = `${URL}/notifications/change-stream?_format=event-stream`
    let src = new window.EventSource(URLNotification)
    src.addEventListener('data', (msg) => {
      let data = JSON.parse(msg.data).data
      if (data.profileId === id) {
        this.setState({ notificationCount: this.state.notificationCount + 1 })
      }
    })

    axios.get(`${URL}/profiles/${id}/notifications/count?filter[where][isRead]=false`)
    .then(response=> {
      this.setState({
        notificationCount: response.data.count
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

  handleNotif () {
    this.setState({showNotif: !this.state.showNotif})
  }

  render () {
    return (
      <div className='Navigation'>
        <nav className='nav has-shadow navigation'>
          <div className='container'>
            <div className='nav-left search-left'>
              <a className='nav-item'>
                <img style={{height:'100%'}} src={require("../assets/image/banner.png")} alt="Tentara Pelajar" />
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

              <Link className='nav-item is-tab is-hidden-mobile' to={'/profile/'+this.userId}>
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
              <Link className='nav-item is-tab is-hidden-mobile' to='/chat'>
                <span className='icon' style={{color: 'black'}}>
                  <i className='fa fa-comments-o'></i>
                </span>
              </Link>
              <div>
              <a onClick={this.handleNotif.bind(this)} className='nav-item is-tab is-hidden-mobile level-item' style={{color: 'black'}}>
                <span className='icon' style={{position: 'relative'}}>
                  <i className='fa fa-bell'></i>
                  {this.state.notificationCount}
                </span>
              </a>
                <div style={{
                  marginLeft: -180
                }}>
                {
                  this.state.showNotif
                  ? <Notifications profileId={this.state.userProfile.id} />
                  : ''
                }
                </div>
              </div>
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
        <progress className='progress is-small is-warning' value={this.state.isLoading} max='1000'>{this.state.isLoading}</progress>
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
