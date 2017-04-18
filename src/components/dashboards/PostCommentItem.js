import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

class PostCommentItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCommentOwner: false
    }
    this.userProfile = JSON.parse(window.localStorage.getItem('userProfile'))
  }

  componentDidMount() {
    if (this.userProfile.id === this.props.comment.profileId) {
      this.setState({
        isCommentOwner: true
      })
    }
  }

  render() {
    return (
      <ul>
        <li className="commentItem">
          <div
            style={
              {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }
            }
          >
            <img src="" alt=""/>
            <Link to={'#'} className="button is-link">{this.props.comment.profile.fullname}</Link>
          </div>
          <div
            style={
              {
                background: '#fdffff',
                padding: '10px'
              }
            }
          >
            <span>
              {this.props.comment.content}
            </span>
          </div>
          <span
            style={
              {
                background: '#fdffff',
                padding: '10px',
              }
            }
            className="is-pulled-right"
          >
              <small>
                {moment(this.props.comment.createdAt).fromNow()}
              </small>
            </span>
        </li>
      </ul>
    )
  }
}

export default PostCommentItem
