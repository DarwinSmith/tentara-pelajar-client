import React from 'react'

import './Notification.css'

class Notification extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showNotif: true
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.showNotif !== this.state.showNotif) {
      this.setState({showNotif: !this.state.showNotif})
    }
  }

  render () {
    return (
      <div id='notificationContainer' className={this.state.showNotif ? 'hideNotifContainer' : ''}>
        <div id='notificationTitle'>Notifications</div>
        <div id='notificationsBody' className='notifications'>hello...</div>
        <div id='notificationFooter'><a href='#'>See All</a></div>
      </div>
    )
  }
}

export default Notification
