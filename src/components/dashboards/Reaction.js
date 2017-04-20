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
    this._countAppreciator()
  }

  _getAppreciator() {
    axios.get(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/reactions/count?where[profileId]=4&where[postId]=36`)
  }

  _countAppreciator() {
    axios.get(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/reactions/count?where[emoji]=${this.props.emoji}&where[postId]=${this.props.postId}`)
      .then(res => {
        this.setState({
          appreciatorCount: res.data.count
        })
      })
      .catch(err => console.error(err))
  }

  _reactTo() {
    axios.get(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/reactions/count?where[profileId]=${this.userProfile.id}&where[postId]=${this.props.postId}`)
      .then(res => {
        if (res.data.count == 0) {
          axios.post(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/reactions`, {
            profileId: this.userProfile.id,
            postId: this.props.postId,
            emoji: this.props.emoji
          })
            .then(response => {
              this.setState({
                appreciatorCount: this.state.appreciatorCount + 1
              })

            })
            .catch(err => console.error(err))
        } else if (res.data.count == 1) {
          axios.delete(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/http`)
        } else {
          alert('You cannot react')
        }
      })
      .catch(err => console.error(err))
  }

  render() {
    let emoji
    switch (this.props.emoji) {
      case 'like':
        emoji = <a onClick={this._reactTo.bind(this)}><i className="fa fa-thumbs-up"></i>{this.state.appreciatorCount == 0 ? '' : this.state.appreciatorCount}</a>
        break
      case 'love':
        emoji = <a onClick={this._reactTo.bind(this)}><i className="fa fa-heart"></i>{this.state.appreciatorCount == 0 ? '' : this.state.appreciatorCount}</a>
        break
      case 'smile':
        emoji = <a onClick={this._reactTo.bind(this)}><i className="fa fa-smile-o"></i>{this.state.appreciatorCount == 0 ? '' : this.state.appreciatorCount}</a>
        break
      case 'sad':
        emoji = <a onClick={this._reactTo.bind(this)}><i className="fa fa-frown-o"></i>{this.state.appreciatorCount == 0 ? '' : this.state.appreciatorCount}</a>
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


