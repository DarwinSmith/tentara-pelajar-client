/**
 * Created by lightmitch on 4/13/17.
 */

import React, {Component} from 'react'
import './style.css'

class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image"/>
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">Seorang pelajar yang namanya pasaran</p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a>#css</a> <a>#responsive</a>
              <br/>
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </div>
          <div className="card-image">
            <figure classname="image is-4by3">
              <img src="http://bulma.io/images/placeholders/1280x960.png" alt="placeholder"/>
            </figure>
          </div>
            <div className="reactions">
              <span className="reaction">
                <a><i className="fa fa-thumbs-up"></i></a>
              </span>
              <span className="reaction">
                <a><i className="fa fa-heart"></i></a>
              </span>
              <span className="reaction">
                <a><i className="fa fa-smile-o"></i></a>
              </span>
              <span className="reaction">
                <a><i className="fa fa-frown-o"></i></a>
              </span>
            </div>
        </div>
      </div>
    )
  }
}

export default Timeline

