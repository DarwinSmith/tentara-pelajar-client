/**
 * Created by lightmitch on 4/13/17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './style.css'
import moment from 'moment'
import PostComments from './PostComments'

class Timeline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transform: 'nama',
      displayComments: false,
      commentsCount: 0
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

    axios.get(`http://localhost:3001/api/posts/${this.props.timeline.id}/comments/count`)
      .then(response => {
        this.setState({
          commentsCount: response.data.count
        })
      })
      .catch(err => console.error(err))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop

  }

  _displayComments() {
    this.setState({
      displayComments: !this.state.displayComments
    })
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
                <p className="title is-4">{this.props.timeline.profile.fullname}</p>
                <p className="subtitle is-6"><small>{moment(this.props.timeline.createdAt).fromNow()}</small></p>
              </div>
            </div>

            <div className="content">
              {this.props.timeline.content}
              <br/>
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
              <span className="is-pulled-right commentPostButton">
                <a onClick={this._displayComments.bind(this)}>({this.state.commentsCount})Comments</a>
              </span>
            </div>
            {
              this.state.displayComments
                ? <div className="card-content">
                    {
                      this.state.commentsCount
                        ?
                          <div>
                            <PostComments postId={this.props.timeline.id}/>
                          </div>
                        : <small>Maaf kamu belum mempunyai komen sama sekali :( </small>
                    }
                    <input className="input is-primary" type="text"/>
                  </div>
                : ''
            }
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({

})


export default connect(null, null)(Timeline)
