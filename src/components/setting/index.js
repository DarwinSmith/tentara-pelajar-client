import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { connect } from 'react-redux'
import FineUploaderS3 from 'fine-uploader-wrappers/s3'
import Gallery from 'react-fine-uploader'

import { fetchProfile, patchProfile, fetchSkills, removeSkills, postSkills, fetchPersonalities, removePersonalities, postPersonalities } from '../../actions'
import './setting.css'

const profilePicUrl = ''
const uploader = new FineUploaderS3({
  options: {
    request: {
      endpoint: 'https://s3-us-west-2.amazonaws.com/uploader-tentara-pelajar/',
      accessKey: 'AKIAIZTWQJ7BE4WN4GSQ'
    },
    validation: {
      multiple: false,
      itemLimit: 1
    },
    signature: {
      endpoint: 'http://localhost:3003/s3handler',
      version: 4
    },
    uploadSuccess: {
      endpoint: 'http://localhost:3003/success'
    },
    chunking: {
      enabled: true
    },
    objectProperties: {
      region: 'us-west-2'
    },
    callbacks: {
      onComplete: (id, fileName, resJSON) => {
        console.log(resJSON);
        profilePicUrl = `https://s3-us-west-2.amazonaws.com/uploader-tentara-pelajar/${resJSON.key}`
      }
    }
  }
})

class Setting extends Component {
  constructor () {
    super()
    this.state = {
      profile: {},
      editProfile: {},
      account: {},
      isEdit: {
        avatar: false,
        name: false,
        phone: false,
        school: false,
        activities: false,
        achievement: false,
        email: false,
        password: false
      }
    }
    this.userId = JSON.parse(localStorage.getItem('userProfile')).id
    this.email = JSON.parse(localStorage.getItem('userDetail')).email
  }

  componentDidMount() {
    this.props.fetchProfile(this.userId)
    this.props.fetchSkills(this.userId)
    this.props.fetchPersonalities(this.userId)

  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      profile: {
        name: nextProps.profile.fullname,
        phone: nextProps.profile.phone,
        school: nextProps.profile.school,
        personalities: nextProps.profile.personalities,
        activities: nextProps.profile.activity,
        achievement: nextProps.profile.experience,
        email: nextProps.profile.email
      },
      account: {
        password: "********"
      },
      skills: '',
      personalities: ''
    })
  }

  saveUpload () {
    if (profilePicUrl !== '') {
      this.props.patchProfile({avatar: profilePicUrl})
    }
    this.setState({isEdit: {avatar: !this.state.isEdit.avatar}})
  }

  avatarUpload () {
    this.setState({
      isEdit: {avatar: !this.state.isEdit.avatar}
    })
    console.log(this.state.isEdit.avatar);
  }

  changeName (event) {
    let value = event.target.value
    this.setState({
      name: value
    })
  }

  _editTrigger(event, origin) {
    let setIsEdit = this.state.isEdit
    setIsEdit[origin] = true
    this.setState({
      isEdit: setIsEdit
    })
  }

  _saveEdit(event, origin) {
    let setIsEdit = this.state.isEdit
    setIsEdit[origin] = false
    this.setState({
      isEdit: setIsEdit
    })
    this.props.patchProfile(this.state.editProfile)
  }

  render () {
    return (
    <div className="">
      <CSSTransitionGroup
        transitionName="dashboards"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={false} >
        <div>
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="card">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <h1 style={{textAlign: 'center'}}>Account Setting</h1>
                      <img style={{display: 'block', margin: 'auto'}} className='profile-banner-pic' src={this.props.profile.avatar} alt=''/>
                      <h4>Avatar</h4>
                      <a href="#" onClick={this.avatarUpload.bind(this)}>
                        <span className="icon">
                          <i className="fa fa-edit"></i>
                        </span>
                      </a>
                      {
                        this.state.isEdit.avatar
                        ? <div>
                            <Gallery className='gallery' uploader={uploader} />
                            <a href='#' onClick={e => this.saveUpload()}>
                              <span className="icon">
                                <i className="fa fa-save"></i>
                              </span>
                            </a>
                          </div>
                        : ''
                      }
                    </div>
                  </div>
                </article>
              </div>
              <div className="card">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <h4>
                        Basics
                      </h4>
                      <div className="field">
                        <label className="label">Nama</label>
                        {
                          this.state.isEdit.name
                          ? <a href="#" onClick={e => this._saveEdit(e, 'name')}>
                              <span className="icon">
                                <i className="fa fa-save"></i>
                              </span>
                            </a>
                          : <a href="#" onClick={e => this._editTrigger(e, 'name')}>
                              <span className="icon">
                                <i className="fa fa-edit"></i>
                              </span>
                            </a>
                        }
                        {
                          this.state.isEdit.name
                          ? <input className="input" type="text" placeholder={this.state.profile.name} onChange={(event)=> this.setState({editProfile:{fullname :event.target.value}})} />
                          : this.state.profile.name
                        }
                        <hr/>

                        <label className="label">Telepon</label>
                        {
                          this.state.isEdit.phone
                          ? <a href="#" onClick={e => this._saveEdit(e, 'phone')}>
                              <span className="icon">
                                <i className="fa fa-save"></i>
                              </span>
                            </a>
                          : <a href="#" onClick={e => this._editTrigger(e, 'phone')}>
                              <span className="icon">
                                <i className="fa fa-edit"></i>
                              </span>
                            </a>
                        }
                        {
                          this.state.isEdit.phone
                          ? <input className="input" type="text" placeholder={this.state.profile.phone} onChange={(event)=> this.setState({editProfile:{phone : event.target.value}})} />
                        : this.state.profile.phone
                        }
                        <hr/>

                        <label className="label">Sekolah</label>
                        {
                          this.state.isEdit.school
                          ? <a href="#" onClick={e => this._saveEdit(e, 'school')}>
                              <span className="icon">
                                <i className="fa fa-save"></i>
                              </span>
                            </a>
                          : <a href="#" onClick={e => this._editTrigger(e, 'school')}>
                              <span className="icon">
                                <i className="fa fa-edit"></i>
                              </span>
                            </a>
                        }
                        {
                          this.state.isEdit.school
                          ? <input className="input" type="text" placeholder={this.state.profile.school} onChange={(event)=> this.setState({editProfile:{school:event.target.value}})} />
                        : this.state.profile.school
                        }
                        <hr/>
                        <label className="label">Aktivitas</label>
                        {
                          this.state.isEdit.activities
                          ? <a href="#" onClick={e => this._saveEdit(e, 'activities')}>
                              <span className="icon">
                                <i className="fa fa-save"></i>
                              </span>
                            </a>
                          : <a href="#" onClick={e => this._editTrigger(e, 'activities')}>
                              <span className="icon">
                                <i className="fa fa-edit"></i>
                              </span>
                            </a>
                        }
                        {
                          this.state.isEdit.activities
                          ? <input className="input" type="text" placeholder={this.state.profile.activities} onChange={(event)=> this.setState({editProfile:{activity:event.target.value}})} />
                        : this.state.profile.activities
                        }
                        <hr/>

                        <label className="label"> Penghargaan</label>
                        {
                          this.state.isEdit.achievement
                          ? <a href="#" onClick={e => this._saveEdit(e, 'achievement')}>
                              <span className="icon">
                                <i className="fa fa-save"></i>
                              </span>
                            </a>
                          : <a href="#" onClick={e => this._editTrigger(e, 'achievement')}>
                              <span className="icon">
                                <i className="fa fa-edit"></i>
                              </span>
                            </a>
                        }
                        {
                          this.state.isEdit.achievement
                          ? <input className="input" type="text" placeholder={this.state.profile.achievement} onChange={(event)=> this.setState({editProfile:{experience:event.target.value}})} />
                        : this.state.profile.achievement
                        }
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="card">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <h4>
                        Endorsement
                      </h4>
                      <div className="field">
                        <label className="label">Personalities</label>
                          <input className="input" type="text" onChange={(event)=> this.setState({personalities:event.target.value})} />
                          <a href="#" onClick={e => this.props.postPersonalities(this.state.personalities)}>
                            <span className="icon">
                              <i className="fa fa-save"></i>
                            </span>
                          </a>
                          <br />
                            {
                              this.props.personalities.length === 0 ?
                              <img style={{width:"3%"}} src={require("../../assets/image/loading.gif")} alt="Loading" /> :
                                <div>
                                  {
                                    this.props.personalities.map((value, index) => (
                                      <div className="chip" key={index}>
                                        <p>{value.content}</p>
                                        <a href="#" onClick={e => this.props.removePersonalities(value.id)}>
                                          <span className="icon">
                                            <i className="fa fa-remove"></i>
                                          </span>
                                        </a>
                                      </div>
                                    ))
                                  }
                                </div>
                            }
                        <hr/>
                        <label className="label">Skills</label>
                          <input className="input" type="text" onChange={(event)=> this.setState({skills:event.target.value})} />
                          <a href="#" onClick={() => this.props.postSkills(this.state.skills)}>
                            <span className="icon">
                              <i className="fa fa-save"></i>
                            </span>
                          </a>
                        <br />
                          {
                            this.props.skills.length === 0 ?
                            <img style={{width:"3%"}} src={require("../../assets/image/loading.gif")} alt="Loading" /> :
                              <div>
                                {
                                  this.props.skills.map((value, index) => (
                                    <div className="chip" key={index}>
                                      <p>{value.name}</p>
                                      <span className="icon">
                                        <i className={value.icon}></i>
                                      </span>
                                      <a href="#" onClick={() => this.props.removeSkills(value.id)}>
                                        <span className="icon">
                                          <i className="fa fa-remove"></i>
                                        </span>
                                      </a>
                                    </div>
                                  ))
                                }
                              </div>
                          }
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="card">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <h4>
                        Account
                      </h4>
                      <div className="field">
                        <label className="label">Email:</label>
                      {  this.email }
                        <hr/>

                        <label className="label">Password:</label>
                        {this.state.account.password}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>

          </div>
        </div>
      </CSSTransitionGroup>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    loggedIn : state.loggedIn,
    profile : state.profile,
    skills: state.skills,
    personalities: state.personalities
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchProfile : (id) => dispatch(fetchProfile(id)),
    patchProfile : (data) => dispatch(patchProfile(data)),
    fetchSkills : (id) => dispatch(fetchSkills(id)),
    removeSkills: (skillId) => dispatch(removeSkills(skillId)),
    postSkills: (skill) => dispatch(postSkills(skill)),
    fetchPersonalities : (id) => dispatch(fetchPersonalities(id)),
    removePersonalities: (personalitiesId) => dispatch(removePersonalities(personalitiesId)),
    postPersonalities: (personalities) => dispatch(postPersonalities(personalities))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
