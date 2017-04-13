/**
 * Created by lightmitch on 4/13/17.
 */
import React, {Component} from 'react'

class LeftSidebar extends Component {
  render() {
    return (
      <div className="column is-3">
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
          <hr/>
        </div>
      </div>
    )
  }
}

export default LeftSidebar
