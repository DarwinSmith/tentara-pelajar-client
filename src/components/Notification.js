import React from 'react'
import axios from 'axios'
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

  _notificationInteraction(type, notifId, profileId, friendId, friendRequestId = '') {
    if (type === 'friend request') {
      axios.put(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/friend_requests/${friendRequestId}`, {
        friendId: friendId,
        profileId: profileId,
      })
        .then(response => {
        })
        .catch(err => console.error(err.message))
    }
    axios.patch(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/notifications/${notifId}`, {
      isRead: true
    })
      .then(response => {
        this.setState({
          done: true
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
            if (notif.object === 'Friend Request') {
              return (
              <li className="notification-item" key={notif.id} style={{background: this.state.done ? '#93FFAA' : '#FF8777'}}>
                <span>{notif.verb}</span>
                <span>
                  {
                    this.state.done
                    ? ''
                    : (<a
                        className="button is-info"
                        onClick={e => this._notificationInteraction('friend request', notif.id, notif.userId, notif.profileId, notif.friendRequestPayload)}>
                        <i className="fa fa-user-plus"></i>
                      </a>)
                  }
                </span>
              </li>)
            }
            return (<li className="notification-item" key={notif.id} style={{background: this.state.done ? '#93FFAA' : '#FF8777'}}>
                      <span>
                        {notif.verb}
                      </span>
                      {
                        this.state.done
                        ? ''
                        : <a
                            className="button is-info"
                            onClick={e => this._notificationInteraction('default', notif.id, notif.userId, notif.profileId, notif.friendRequestPayload)}>
                            <i className="fa fa-check-square"></i>
                          </a>
                      }
                    </li>)
          })}
        </ul>
        {/*<div id='notificationFooter'><a href='#'>See All</a></div> */}
      </div>
    )
  }
}

export default Notification
