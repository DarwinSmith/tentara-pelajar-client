import React from 'react'
import firebase from 'firebase'

const database = firebase.database()
const userId = JSON.parse(window.localStorage.getItem('userDetail')).uid

class Chat extends React.Component {
  constructor () {
    super()
    this.state = {
      chat: '',
      friendClick: ''
    }
  }
  handleChatData () {
    let friendId = this.state.friendClick
    let userId = JSON.parse(window.localStorage.getItem('userDetail')).uid
    let chatData = {
      userId: userId,
      chat: this.state.chat,
      date: new Date()
    }
    database.ref(`chats/${userId}/${friendId}`).push(chatData)
    database.ref(`chats/${friendId}/${userId}`).push(chatData)
  }
  handleChatChange (e) {
    this.setState({
      chat: e.target.value
    })
  }
  getChatHistory () {
    let friendId = this.state.friendClick
    let chatHistoryDetail = database.ref(`chats/${userId}/${friendId}`).limitToLast(100)
    console.log(chatHistoryDetail)
  }
  componentDidMount () {
    let chatHistory = database.ref(`chats/${userId}/`).limitToLast(100)
    console.log(chatHistory)
  }
  render () {
    return (
      <div>
        <h2>Chat ..</h2>
        Chat : <input type='text' name='chat' onChange={this.handleChatChange.bind(this)} />
        <button>Send</button>

      </div>
    )
  }
}

export default Chat
