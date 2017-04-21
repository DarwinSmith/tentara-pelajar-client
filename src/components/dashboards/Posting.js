/**
 * Created by elzeppa on 4/15/17.
 */
import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import FineUploaderS3 from 'fine-uploader-wrappers/s3'
import Gallery from 'react-fine-uploader'
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
      imagesLink: []
    }
    this.userProfile = JSON.parse(window.localStorage.getItem('userProfile'))
    this.uploader = new FineUploaderS3({
      options: {
        request: {
          endpoint: "https://s3-us-west-2.amazonaws.com/uploader-tentara-pelajar/",
          accessKey: "AKIAIZTWQJ7BE4WN4GSQ"
        },
        signature: {
          endpoint: "http://localhost:3003/s3handler",
          version: 4
        },
        uploadSuccess: {
          endpoint: "http://localhost:3003/success"
        },
        chunking: {
          enabled: true
        },
        objectProperties: {
          region: "us-west-2"
        },
        callbacks: {
          onComplete: (id, fileName, resJSON) => {
            this.setState({imagesLink: this.state.imagesLink.concat(`https://s3-us-west-2.amazonaws.com/uploader-tentara-pelajar/${resJSON.key}`)})
          }
        }
      }
    })
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
      console.log('imageLink', this.state.imagesLink);
      this.props.createPost(this.userProfile.id, this.state.postTextContent, this.state.imagesLink)
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
              this.state.imagesLink.length !== 0
            }
          </div>
          <div style={{display: this.state.showImagesDropper ? 'block' : 'none'}}>
            Unggah Foto disini
            <Gallery className="gallery" uploader={this.uploader} />
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
  createPost: (profileId, contents, photo) => dispatch(createPost(profileId, contents, photo))
})

export default connect(null, mapDispatchToProps)(Posting)
