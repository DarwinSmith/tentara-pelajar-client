/**
 * Created by lightmitch on 4/13/17.
 */
import React, {Component} from 'react'
import Timeline from './Timeline'
import './style.css'

class MainContent extends Component {
  render() {
    return (
      <div className="column is-6">
        <div className="card has-left-text">
          <div className="trigger-sharing-text">
            Berbagi artikel maupun gambar..
            <hr/>
            <div className="block">
              <span className="griddify">
                <a className="button">
                <span>
                  Tulis artikel
                </span>
                  <span className="icon">
                  <i className="fa fa-pencil"></i>
                </span>
                </a>
              </span>
              <span className="griddify">
                <a className="button">
                <span>
                Gambar
                </span>
                  <span className="icon">
                  <i className="fa fa-photo"></i>
                </span>
                </a>
              </span>
            </div>
          </div>
        </div>
        <Timeline/>
        <Timeline/>
        <Timeline/>
        <Timeline/>
        <Timeline/>
        <Timeline/>
      </div>
    )
  }
}

export default MainContent
