/**
 * Created by lightmitch on 4/13/17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './style.css'
import moment from 'moment'
import PostComments from './PostComments'
import Reaction from './Reaction'

class Timeline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transform: 'nama',
      displayComments: false,
      commentsCount: 0
    }
    this.userProfile = JSON.parse(window.localStorage.getItem('userProfile'))
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

    axios.get(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/posts/${this.props.timeline.id}/comments/count`)
      .then(response => {
        this.setState({
          commentsCount: response.data.count
        })
      })
      .catch(err => console.error(err))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop

  }

  _displayComments() {
    this.setState({
      displayComments: !this.state.displayComments
    })
  }


  render() {
    let emoji = [
      'like',
      'love',
      'smile',
      'sad'
    ]

    return (
      <div className="timeline" onScroll={(e) => this.handleScroll(e)}>
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img className="round-image" src="http://bulma.io/images/placeholders/96x96.png" alt="placeholder"/>
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{this.props.timeline.profile.fullname}</p>
                <p className="subtitle is-6"><small>{moment(this.props.timeline.createdAt).fromNow()}</small></p>
              </div>
            </div>

            <div className="content">
              {this.props.timeline.content}
              <br/>
            </div>
          </div>
          {
            this.props.timeline.images
            ? <div className="card-image">
                <figure className="image is-4by3">
                  <img src="http://bulma.io/images/placeholders/1280x960.png" alt="placeholder"/>
                </figure>
              </div>
            : ''
          }
          <hr/>
          <div className="post-options">
            <div className="reactions">
              {emoji.map((emo, index) => <Reaction key={index} postId={this.props.timeline.id} emoji={emo}/>)}
            </div>
            <span className="is-pulled-right commentPostButton">
             <a className="button is-link" onClick={this._displayComments.bind(this)}>Balasan</a>
            </span>
          </div>
            {
              this.state.displayComments
                ? <div className="card-content">
                    <PostComments
                      postId={this.props.timeline.id}
                      profileId={this.props.timeline.profile.id}
                    />
                  </div>
                : ''
            }
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({

})


export default connect(null, null)(Timeline)
