import React, { Component } from 'react'
import moment from 'moment'

class PostCommentItem extends Component {

  render() {
    return (
      <ul>
        <li className="commentItem">
          <span>
            {this.props.comment.content}
          </span>
          <span>
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
