import React, { Component } from 'react'
import axios from 'axios'
import PostCommentItem from './PostCommentItem'

class PostComments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/api/posts/${this.props.postId}/comments`)
      .then(response => {
        this.setState({
          comments: response.data
        })
      })
      .catch(err => console.error(err.message))
  }

  render() {
    return (
      <div>
        <ul className="menu-list">
          <li>
            {this.state.comments.map(comment => <PostCommentItem comment={comment}/>)}
          </li>
        </ul>
      </div>
    )
  }
}

export default PostComments