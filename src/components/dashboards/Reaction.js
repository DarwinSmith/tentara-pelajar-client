/**
 * Created by hacktiv8 on 4/18/17.
 */
import React, { Component } from 'react'
import axios from 'axios'

class Reaction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appreciatorCount: 0
    }
    this.userProfile = JSON.parse(window.localStorage.getItem('userProfile'))
  }

  componentDidMount() {

  }

  _getAppreciator() {

  }

  _countAppreciator() {
    axios.get()
  }

  _reactTo() {
    axios.post(`http://localhost:3001/api/posts/${this.props.postId}/reactions`, {
      profileId: this.userProfile.id,
      emoji: this.props.emoji
    })
      .then(response => {

      })
      .catch(err => console.error(err))
  }

  render() {
    let emoji
    switch (this.props.emoji) {
      case 'like':
        emoji = <a onClick={this._reactTo.bind(this)}><i className="fa fa-thumbs-up"></i></a>
        break
      case 'love':
        emoji = <a onClick={this._reactTo.bind(this)}><i className="fa fa-heart"></i></a>
        break
      case 'smile':
        emoji = <a onClick={this._reactTo.bind(this)}><i className="fa fa-smile-o"></i></a>
        break
      case 'sad':
        emoji = <a onClick={this._reactTo.bind(this)}><i className="fa fa-frown-o"></i></a>
        break
    }
    return (
      <span className="reaction">
        {emoji}
      </span>
    )
  }
}

export default Reaction


