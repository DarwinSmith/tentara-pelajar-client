import React from 'react'
import axios from 'axios'
import './Notification.css'

class Notification extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showNotif: true,
      notifications: []
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.showNotif !== this.state.showNotif) {
      this.setState({showNotif: !this.state.showNotif})
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/api/profiles/${this.props.profileId}/notifications`)
      .then(response => {
        this.setState({
          notifications: response.data
        })
      })
      .catch(err => console.error(err))
  }

  render () {
    return (
      <div id='notificationContainer' className={this.state.showNotif ? 'hideNotifContainer' : ''}>
        <div id='notificationTitle'>Notifications</div>
        <ul>
          {this.state.notifications.map(notif => {
            return <li key={notif.id}>{notif.verb}</li>
          })}
        </ul>
        <div id='notificationFooter'><a href='#'>See All</a></div>
      </div>
    )
  }
}

export default Notification
