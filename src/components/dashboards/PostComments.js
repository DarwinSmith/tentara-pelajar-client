import React, { Component } from 'react'
import axios from 'axios'
import PostCommentItem from './PostCommentItem'

class PostComments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      commentsCount: 0
    }
    this.userProfile = JSON.parse(window.localStorage.getItem('userProfile'))
  }

  componentDidMount() {
    axios.get(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/posts/${this.props.postId}/comments?filter[include]=profile`)
      .then(response => {
        this.setState({
          comments: response.data,
          commentsCount: response.data.length
        })
      })
      .catch(err => console.error(err.message))
  }

  _commentOnPost(event) {
    if (event.key === 'Enter') {
      axios.post(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/comments`, {
        postId: this.props.postId,
        profileId: this.userProfile.id,
        friendId: this.props.profileId,
        content: event.target.value
      })
        .then(response => {

          let oldComments = this.state.comments
          axios.get(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/comments/${response.data.id}?filter[include]=profile`)
            .then(res => {
              this.setState({
                comments: [...oldComments, res.data],
                commentsCount: this.state.commentsCount + 1
              })
            })
            .catch(err => console.error(err.message))

        })
        .catch(err => console.error(err))
      event.target.value = ''
    }
  }

  render() {
    return (
      <div>
        <small>{this.state.commentsCount} jumlah komentar</small>
        <ul className="menu-list">
          <li>
            {this.state.comments.map(comment => <PostCommentItem key={comment.id} comment={comment}/>)}
          </li>
        </ul>
        <input onKeyPress={this._commentOnPost.bind(this)} className="input is-primary" type="text"/>
      </div>
    )
  }
}


export default PostComments