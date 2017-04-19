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
    axios.get(`http://localhost:3001/api/profiles/${this.props.profileId}/notifications?filter[where][isRead]=`)
      .then(response => {
        this.setState({
          notifications: response.data
        })
      })
      .catch(err => console.error(err.message))
  }

  _notificationInteraction(type, notifId, profileId, friendId, friendRequestId = '') {
    if (type === 'friend request') {
      axios.put(`http://localhost:3001/api/friend_requests/${friendRequestId}`, {
        friendId: friendId,
        profileId: profileId,
      })
        .then(response => {
          axios.patch(`http://localhost:3001/api/notifications/${notifId}`, {
            isRead: true
          })
            .then(response => {
            })
            .catch(err => console.error(err.message))
        })
        .catch(err => console.error(err.message))
    }
  }

  render () {
    return (
      <div id='notificationContainer'>
        <div id='notificationTitle'>Notifikasi</div>
        <ul>
          {this.state.notifications.map(notif => {
            console.log(notif)
            if (notif.object === 'Friend Request') {
              return (
              <li className="notification-item" key={notif.id}>
                <span>{notif.verb}</span>
                <span>
                  {
                    notif.isRead
                    ?(<a
                        className="button is-info"
                      >
                        <i className="fa fa-check"></i>
                      </a>)
                    :(<a 
                      className="button is-info" 
                      onClick={e => this._notificationInteraction('friend request', notif.id, notif.userId, notif.profileId, notif.friendRequestPayload)}>
                      Terima Pertemanan
                    </a>)
                  }
                </span>
              </li>)
            }
            return (<li className="notification-item" key={notif.id}>
                      <span>
                        {notif.verb}
                      </span>
                    </li>)
          })}
        </ul>
        {/*<div id='notificationFooter'><a href='#'>See All</a></div> */}
      </div>
    )
  }
}

export default Notification
