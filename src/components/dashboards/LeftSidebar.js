/**
 * Created by lightmitch on 4/13/17.
 */
import React, {Component} from 'react'
import './style.css'

class LeftSidebar extends Component {
  render() {
    return (
      <div className="column is-3 left-sidebar-container">
        <div className="card left-sidebar-card">
          <div className="card-content">
            <img className="profile-banner-pic" src="https://unsplash.it/200/300/?random" alt=""/>
          </div>
          <div className="card-content">
            Danang Aji Tamtomo
          </div>
          <hr/>
          <div className="card-content">
            20 friends
          </div>
        </div>
      </div>
    )
  }
}

export default LeftSidebar
