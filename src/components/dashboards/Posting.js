/**
 * Created by elzeppa on 4/15/17.
 */
import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './style.css'

class Posting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showInput: false
    }
  }

  _postEvent(event) {

    this.setState({
      showInput: true
    })
  }

  _postLeave(event) {
    this.setState({
      showInput: false
    })
  }


  render() {
    let postInput
    if (this.state.showInput) {
      postInput =
        <div>
          <div>
            <textarea className="postAppear"></textarea>
          </div>
          <div className="post-options">
            <a onClick={this._postLeave.bind(this)} href="#" className="button is-danger">Cancel</a>
            <a href="#" className="button is-info">Post</a>
          </div>
        </div>
    } else {
      postInput = <textarea className="postLeave" onClick={this._postEvent.bind(this)}>Berbagi artikel maupun gambar..</textarea>
    }
    return(
      <div className="posting-container">
        <div className="card has-left-text">
          <div className="trigger-sharing-text">
            <CSSTransitionGroup
              transitionName="dashboards"
              transitionLeaveTimeout={500}
              transitionEnterTimeout={500}
            >
              {postInput}
            </CSSTransitionGroup>
            <hr/>
            <div className="block">
              <span className="griddify">
                <a className="button"
                  onClick={this._postEvent.bind(this)}
                >
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
      </div>
    )
  }
}

export default Posting
