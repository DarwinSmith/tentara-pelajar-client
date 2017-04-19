/**
 * Created by lightmitch on 4/13/17.
 */
import React, {Component} from 'react'
import './style.css'

class RightSidebar extends Component {
  render() {
    return (
      <div className="column is-3">
        <div className="right-sidebar">
          <div className="card">
            <div className="card-title">
              <h1>Sugesti Teman</h1>
            </div>
          </div>
          <div className="friend-suggestion-card sd-color">
            <img className="" src="https://unsplash.it/200/300/?random" alt=""/>
            <span>
              <p>Irwin Pratajaya</p>
              <p className="small-text">SD serius</p>
            </span>
            <a href="#" className="button is-info"><i className="fa fa-user-plus"/></a>
          </div>
        </div>
      </div>
    )
  }
}

export default RightSidebar
