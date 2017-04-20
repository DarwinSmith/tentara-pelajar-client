/**
 * Created by elzeppa on 4/15/17.
 */
import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {createPost} from '../../actions'
import {connect} from 'react-redux'
import './style.css'

class Posting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showInput: false,
      showImagesDropper: false,
      postTextContent: '',
      imagesLink: [
        'https://unsplash.it/300/200',
        'https://unsplash.it/300/200',
        'https://unsplash.it/300/200'
      ]
    }
    this.userProfile = JSON.parse(window.localStorage.getItem('userProfile'))
  }

  _postEvent() {
    this.setState({
      showInput: true,
      showImagesDropper: true
    })

    setTimeout(()=>this.postTextarea.focus(),100)
  }

  _postLeave() {
    this.setState({
      showInput: false,
      showImagesDropper: false
    })
    this.postTextarea.value = ''
  }

  _createPost() {
    if (this.state.postTextContent !== '') {
      this.props.createPost(this.userProfile.id, this.state.postTextContent)
    }
    this._postLeave()
  }

  _setPostingTextContent(event) {
    let postingValue = event.target.value
    this.setState({
      postTextContent: postingValue
    })
  }

  _postPictureButtonHandler() {
    this.setState({
      showImagesDropper: !this.state.showImagesDropper,
      showInput: !this.state.showInput
    })
  }

  render() {
    let postInput =
      (<div>
        <div style={{ display: this.state.showInput ? 'block' : 'none' }}>
        <div>
          <textarea className="postAppear" ref={input => {this.postTextarea = input}} onChange={e => this._setPostingTextContent(e)}></textarea>
        </div>
          <hr/>
          <div className="posting-pictures-container">
            {
              this.state.imagesLink.map(link => <img src={link}/>)
            }
          </div>
          <div style={{display: this.state.showImagesDropper ? 'block' : 'none'}}>
            Image uploader here
            /*TODO: Taro sini dam*/
          </div>
          <hr/>
        <div className="post-options">
          <a onClick={this._postLeave.bind(this)} href="#" className="button is-danger">Cancel</a>
          <a href="#" className="button is-info" onClick={this._createPost.bind(this)}>Post</a>
        </div>
      </div>
        <div style={{ display: this.state.showInput ? 'none' : 'block' }}>
          <textarea className="postLeave" onClick={this._postEvent.bind(this)} defaultValue={'Berbagi artikel maupun gambar..'}></textarea>
        </div>
      </div>
      )
    return(
      <div className="posting-container">
        <div className="card has-left-text">
          <div className="trigger-sharing-text">
            <CSSTransitionGroup
              transitionName="dashboards"
              transitionLeaveTimeout={500}
              transitionEnterTimeout={500}
            >
              {postInput}
            </CSSTransitionGroup>
            <hr/>
            <div className="block">
              <span className="griddify">
                <a className="button"
                  onClick={this._postEvent.bind(this)}
                >
                <span>
                  Berbagi Sesuatu
                </span>
                  <span className="icon">
                  <i className="fa fa-pencil"></i>
                </span>
                </a>
              </span>
              {/*<span className="griddify">*/}
                {/*<a className="button" onClick={this._postPictureButtonHandler.bind(this)}>*/}
                {/*<span>*/}
                {/*Gambar*/}
                {/*</span>*/}
                  {/*<span className="icon">*/}
                  {/*<i className="fa fa-photo"></i>*/}
                {/*</span>*/}
                {/*</a>*/}
              {/*</span>*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createPost: (profileId, contents) => dispatch(createPost(profileId, contents))
})

export default connect(null, mapDispatchToProps)(Posting)
