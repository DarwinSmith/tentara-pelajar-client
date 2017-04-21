/**
 * Created by lightmitch on 4/13/17.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style.css'

class LeftSidebar extends Component {
  constructor(props) {
    super(props)
    this.userProfile = JSON.parse(window.localStorage.getItem('userProfile'))
  }

  render() {
    return (
      <div className="column is-3 left-sidebar-container">
        <div className="card left-sidebar-card sma-color">
          <div className="card-content">
            <img className="profile-banner-pic" src={this.userProfile.avatar} alt=""/>
          </div>
          <div className="card-content sma-color">
            {this.userProfile.fullname}
          </div>
          <hr/>
          <div className="card-content sma-color">
            20 friends
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

export default connect(mapStateToProps, null)(LeftSidebar)
