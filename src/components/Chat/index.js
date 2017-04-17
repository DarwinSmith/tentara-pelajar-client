import React from 'react'
import firebase from 'firebase'

import Chat from './Chat'
import OnlineFriend from './OnlineFriend'

class Index extends React.Component {
  render () {
    return (
      <div>
        <h1>From chatting...</h1>
        <OnlineFriend />
        <Chat />
      </div>
    )
  }
}

export default Index
