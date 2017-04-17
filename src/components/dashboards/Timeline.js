/**
 * Created by lightmitch on 4/13/17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style.css'

class Timeline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transform: 'nama'
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop

  }

  render() {
    return (
      <div className="timeline" onScroll={(e) => this.handleScroll(e)}>
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img className="round-image" src="http://bulma.io/images/placeholders/96x96.png" alt="placeholder"/>
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">Seorang pelajar yang namanya pasaran</p>
              </div>
            </div>

            <div className="content">
              {this.props.timeline.content}
              <br/>
              <small>{this.props.timeline.createdAt}</small>
            </div>
          </div>
          {
            this.props.timeline.images
            ? <div className="card-image">
                <figure className="image is-4by3">
                  <img src="http://bulma.io/images/placeholders/1280x960.png" alt="placeholder"/>
                </figure>
              </div>
            : ''
          }
          <hr/>
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

const mapDispatchToProps = dispatch => ({

})


export default connect(null, null)(Timeline)

