import React from 'react'
import Navigation from '../Navigation'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import firebase from 'firebase'
import moment from 'moment'
import axios from 'axios'
const URL = 'http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api'
const profile = JSON.parse(window.localStorage.getItem('userProfile'))
import './styles.css'

class Chat extends React.Component {

  constructor () {
    super()
    this.state = {
      chat: '',
      friendChat: '',
      friendList: '',
      chatHistory: [],
    }
    this.profile = JSON.parse(localStorage.getItem('userProfile'))
  }
  handleChatData () {
    let friendId = this.state.friendChat.userId
    let chatData = {
      userId: this.profile.userId,
      chat: this.state.chat,
      date: firebase.database.ServerValue.TIMESTAMP
    }
    firebase.database().ref(`chats/${profile.userId}/${friendId}`).push(chatData)
    firebase.database().ref(`chats/${friendId}/${profile.userId}`).push(chatData)
    this.setState({chat: ''})
  }
  handleChatChange (e) {
    this.setState({
      chat: e.target.value
    })
  }

  getChatHistory () {
    let friendId = this.state.friendClick
    this.setState({chatHistory: []})
    let chatHistoryDetail = firebase.database().ref(`chats/${profile.userId}/${friendId}`).limitToLast(100)
  }

  setProfile () {
    console.log('fired',this.profile)
    axios.get(`${URL}/profiles/${this.profile.id}/contacts`)
    .then(res => {
      this.setState({friendList: res.data.contacts})
      console.log(res.data.contacts)
    })
    .catch(err => {
      console.log(err)
    })
    let chatHistory = firebase.database().ref(`chats/${this.profile.userId}/`).limitToLast(100)
  }

  componentDidMount () {
    setTimeout(this.setProfile(), 500)
  }

  handleFriendChat (friend) {
    this.setState({friendChat: friend})

    firebase.database().ref(`chats/${profile.userId}/${friend.userId}/`).once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        if (this.state.chatHistory.indexOf(childSnapshot.val()) === -1) {
          this.setState({
            chatHistory: this.state.chatHistory.concat(childSnapshot.val())
          })
        }
      })
    })
    firebase.database().ref(`chats/${profile.userId}/${friend.userId}/`).on('child_added', snapshot => {
      this.setState({
        chatHistory: this.state.chatHistory.concat(snapshot.val())
      })
    })
  }

  render () {
    return (
      <div className="chat-page">
        <CSSTransitionGroup
          transitionName="dashboards"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false} >
        <div className="wrapper ">
          <div className="kotak columns">
              <div className="left">
                  <div className="top">
                      <input type="text" />
                      <a href="javascript:;" className="search"></a>
                  </div>
                  <ul className="people">
                    {
                      this.state.friendList === ''
                      ? <img style={{width:"3%"}} src={require("../../assets/image/loading.gif")} alt="Loading" />
                      : this.state.friendList.map(friend => {
                        return (
                          <li key={friend.id} onClick={this.handleFriendChat.bind(this, friend)} className="person" data-chat="person1">
                              <img src="http://s13.postimg.org/ih41k9tqr/img1.jpg" alt="" />
                              <span className="name">{friend.fullname}</span>
                              <span className="time">2:09 PM</span>
                              <span className="preview">I was wondering...</span>
                          </li>
                        )
                      })
                    }
                  </ul>
              </div>
              <div className="right">
                  <div className="top"><span>To:
                  {
                    this.state.friendChat === ''
                    ? <span className="name"> Please pick your friend from friend list</span>
                    : <span className="name">{this.state.friendChat.fullname}</span>
                  }
                  </span></div>
                  <div className="chat" data-chat="person1">
                      <div className="conversation-start">
                      </div>
                      {
                        this.state.chatHistory === ''
                        ? <p>Start your Chat</p>
                        : this.state.chatHistory.map(chat => {
                          if (chat.userId === this.profile.userId) {
                            return (
                              <div key={chat.date} className="bubble you">
                                  <strong>{this.state.friendChat[chat.userId]}{chat.chat}</strong>
                                  <p><small>{moment(chat.date).fromNow()}</small></p>
                              </div>
                            )
                          } else {
                            return (
                              <div key={chat.date} className="bubble me">
                                  <strong>{profile[chat.userId]}{chat.chat}</strong>
                                  <p><small>{moment(chat.date).fromNow()}</small></p>
                              </div>
                            )
                          }
                        })
                      }
                  </div>
                  <div className="write">
                      <input type="text" name='chat' onChange={this.handleChatChange.bind(this)} />
                      <a style={{margin:'10px'}} href="javascript:;" className="write-link" onClick={this.handleChatData.bind(this)}>
                        <span className='icon'>
                          <i className='fa fa-send'></i>
                        </span>
                      </a>
                  </div>
              </div>
          </div>
      </div>
      </CSSTransitionGroup>
      </div>
    )
  }
}

export default Chat
