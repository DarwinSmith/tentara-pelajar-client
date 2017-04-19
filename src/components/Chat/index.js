import React from 'react'
import Navigation from '../Navigation'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import firebase from 'firebase'
import axios from 'axios'
const URL = 'http://localhost:3001/api'
const profile = JSON.parse(window.localStorage.getItem('userProfile'))
import './styles.css'

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
      <div className="chat-page">
        <Navigation />
        <CSSTransitionGroup
          transitionName="dashboards"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false} >
        <div className="wrapper columns">
          <div className="kotak ">
              <div className="left">
                  <div className="top">
                      <input type="text" />
                      <a href="javascript:;" className="search"></a>
                  </div>
                  <ul className="people">
                      <li className="person" data-chat="person1">
                          <img src="http://s13.postimg.org/ih41k9tqr/img1.jpg" alt="" />
                          <span className="name">Thomas Bangalter</span>
                          <span className="time">2:09 PM</span>
                          <span className="preview">I was wondering...</span>
                      </li>
                      <li className="person" data-chat="person2">
                          <img src="http://s3.postimg.org/yf86x7z1r/img2.jpg" alt="" />
                          <span className="name">Dog Woofson</span>
                          <span className="time">1:44 PM</span>
                          <span className="preview">Ive forgotten how it felt before</span>
                      </li>
                      <li className="person" data-chat="person3">
                          <img src="http://s3.postimg.org/h9q4sm433/img3.jpg" alt="" />
                          <span className="name">Louis CK</span>
                          <span className="time">2:09 PM</span>
                          <span className="preview">But we’re probably gonna need a new carpet.</span>
                      </li>
                      <li className="person" data-chat="person4">
                          <img src="http://s3.postimg.org/quect8isv/img4.jpg" alt="" />
                          <span className="name">Bo Jackson</span>
                          <span className="time">2:09 PM</span>
                          <span className="preview">It’s not that bad...</span>
                      </li>
                      <li className="person" data-chat="person5">
                          <img src="http://s16.postimg.org/ete1l89z5/img5.jpg" alt="" />
                          <span className="name">Michael Jordan</span>
                          <span className="time">2:09 PM</span>
                          <span className="preview">Wasup for the third time like is
      you bling bitch</span>
                      </li>
                      <li className="person" data-chat="person6">
                          <img src="http://s30.postimg.org/kwi7e42rh/img6.jpg" alt="" />
                          <span className="name">Drake</span>
                          <span className="time">2:09 PM</span>
                          <span className="preview">howdoyoudoaspace</span>
                      </li>
                  </ul>
              </div>
              <div className="right">
                  <div className="top"><span>To: <span className="name">Dog Woofson</span></span></div>
                  <div className="chat" data-chat="person1">
                      <div className="conversation-start">
                          <span>Today, 6:48 AM</span>
                      </div>
                      <div className="bubble you">
                          Hello,
                      </div>
                      <div className="bubble you">
                          its me.
                      </div>
                      <div className="bubble you">
                          I was wondering...
                      </div>
                  </div>
                  <div className="write">
                      <a href="javascript:;" className="write-link attach"></a>
                      <input type="text" />
                      <a href="javascript:;" className="write-link smiley"></a>
                      <a href="javascript:;" className="write-link send"></a>
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
