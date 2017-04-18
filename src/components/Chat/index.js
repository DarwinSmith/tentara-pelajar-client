import React from 'react'
import firebase from 'firebase'
import axios from 'axios'
import Navigation from '../Navigation'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const URL = 'http://localhost:3001/api'
const profile = JSON.parse(window.localStorage.getItem('userProfile'))

class Chat extends React.Component {
  constructor () {
    super()
    this.state = {
      chat: '',
      friendChat: '',
      friendList: '',
      chatHistory: []
    }
  }
  handleChatData () {
    console.log('fired')
    let friendId = this.state.friendChat.userId
    let chatData = {
      userId: profile.userId,
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
    let chatHistoryDetail = firebase.database().ref(`chats/${profile.userId}/${friendId}`).limitToLast(100)
    console.log(chatHistoryDetail)
  }
  componentDidMount () {
    axios.get(`${URL}/profiles/${profile.id}/contacts`)
    .then(res => {
      this.setState({friendList: res.data.contacts})
    })
    .catch(err => {
      console.log(err)
    })
    let chatHistory = firebase.database().ref(`chats/${profile.userId}/`).limitToLast(100)
    console.log(chatHistory)
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
      <div className="">
        <Navigation />
        <CSSTransitionGroup
          transitionName="dashboards"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false} >
      <div>
        <h2>Chat ..</h2>
        <h2>Fren List</h2>
        <ul>
          {
            this.state.friendList === ''
            ? <p>Loading Coegg</p>
            : this.state.friendList.map(friend => {
              return <li key={friend.id} onClick={this.handleFriendChat.bind(this, friend)}>{friend.fullname}</li>
            })
          }
        </ul>
        You are having chat with :
        {
          this.state.friendChat === ''
          ? <p>Please pick your friend from friend list</p>
          : <p>
            {this.state.friendChat.fullname}
            Chat : <input type='text' name='chat' onChange={this.handleChatChange.bind(this)} />
            <button onClick={this.handleChatData.bind(this)}>Send</button>
          </p>
        }
        <p>Chat Historeee...</p>
        <ul>
          {
            this.state.chatHistory === ''
            ? <p>Start your chet</p>
            : this.state.chatHistory.map(chat => {
              if (profile[chat.userId] === null) {
                return <li key={chat.date}><strong>Reply from {this.state.friendChat[chat.userId]}{chat.chat}</strong><span>{chat.date}</span></li>
              } else {
                return <li key={chat.date}><strong>You Sent {profile[chat.userId]}{chat.chat}</strong><span>{chat.date}</span></li>
              }
            })
          }
        </ul>

      </div>
    </CSSTransitionGroup>
    </div>
    )
  }
}

export default Chat
