import React, { Component } from 'react'
import axios from 'axios'

class FriendSuggestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAdded: false
    }
    this.userProfile = JSON.parse(window.localStorage.getItem('userProfile'))
  }

  _addFriend() {
    axios.post(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/friend_requests`, {
      profileId: this.userProfile.id,
      friendId: this.props.suggestion.id
    })
      .then(response => {
        this.setState({
          isAdded: true
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className={`friend-suggestion-card ${this.props.suggestion.school ? this.props.suggestion.school.grade.toLowerCase() : ''}-color`}>
        <img className="" src="https://unsplash.it/200/300/?random" alt=""/>
        <span>
              <p>{this.props.suggestion.fullname}</p>
              <p className="small-text">{this.props.suggestion.school ? this.props.suggestion.school.name : ''}</p>
            </span>
        <a href="#" className="button is-info" onClick={this.state.isAdded ? () => {} : this._addFriend.bind(this)}>{this.state.isAdded ? <i className="fa fa-check"/> : <i className="fa fa-user-plus"/>}</a>
      </div>
    )
  }
}

export default FriendSuggestion