import React from 'react'
import axios from 'axios'
import NotificationItem from './dashboards/NotificationItem'
import './Notification.css'

class Notification extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      done: false,
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
    axios.get(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/profiles/${this.props.profileId}/notifications?filter[where][isRead]=false`)
      .then(response => {
        this.setState({
          notifications: response.data.reverse()
        })
      })
      .catch(err => console.error(err.message))
  }

  render () {
    return (
      <div id='notificationContainer'>
        <div id='notificationTitle'>Notifikasi</div>
        <ul>
          {this.state.notifications.map(notif => {
            return <NotificationItem notif={notif}/>
          })}
        </ul>
        {/*<div id='notificationFooter'><a href='#'>See All</a></div> */}
      </div>
    )
  }
}

export default Notification
