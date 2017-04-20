/**
 * Created by lightmitch on 4/20/17.
 */
import React, {Component} from 'react'
import axios from 'axios'
import '../Notification.css'

class NotificationItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      done: false,
      showNotif: true,
      notifications: []
    }
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

  render() {
    if (this.props.notif.object === 'Friend Request') {
      return (
        <li className="notification-item" style={{background: this.state.done ? '#b7ffe5' : '#ffcdb7'}}>
          <span>{this.props.notif.verb}</span>
          <span>
                  {
                    this.state.done
                      ? ''
                      : (<a
                      className="button is-info"
                      onClick={e => this._notificationInteraction('friend request', this.props.notif.id, this.props.notif.userId, this.props.notif.profileId, this.props.notif.friendRequestPayload)}>
                      Terima Pertemanan
                    </a>)

                  }
                </span>
        </li>)
    }
    return (<li className="notification-item" style={{background: this.state.done ? '#93FFAA' : '#FF8777'}}>
                      <span>
                        {this.props.notif.verb}
                      </span>
      {
        this.state.done
          ? ''
          : <a
          className="button is-info"
          onClick={e => this._notificationInteraction('default', this.props.notif.id, this.props.notif.userId, this.props.notif.profileId, this.props.notif.friendRequestPayload)}>
          <i className="fa fa-check-square"></i>
        </a>
      }
    </li>)
  }
}

export default NotificationItem
