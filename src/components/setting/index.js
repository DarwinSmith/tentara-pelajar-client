import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { connect } from 'react-redux'
import { fetchProfile, patchProfile } from '../../actions'
import './setting.css'

class Setting extends Component {
  constructor () {
    super()
    this.state = {
      profile: {},
      editProfile: {},
      account: {},
      isEdit: {
        name: false,
        phone: false,
        school: false,
        personalities: false,
        activities: false,
        achievement: false,
        email: false,
        password: false
      }
    }
  }

  componentDidMount() {
    this.props.fetchProfile()

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
      }
    })
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

  render() {
    // console.log(this.state.isEdit)
    return (
    <CSSTransitionGroup
      transitionName="dashboards"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false} >
      <div style={{marginTop:"3%"}}>
        <div className="columns">
          <div className="column is-12">
            <div className="card">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <h1 style={{textAlign: 'center'}}>Account Setting</h1>
                    <img style={{display: 'block', margin: 'auto'}} className="profile-banner-pic" src="https://unsplash.it/200/300/?random" alt=""/>
                    <a href="#" onClick={e => this._editTrigger(e, 'name')}>
                        <span className="icon">
                          <i className="fa fa-edit"></i>
                        </span>
                    </a>
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

                      <label className="label">Personalities</label>
                      {
                        this.state.isEdit.personalities
                        ? <a href="#" onClick={e => this._saveEdit(e, 'personalities')}>
                            <span className="icon">
                              <i className="fa fa-save"></i>
                            </span>
                          </a>
                        : <a href="#" onClick={e => this._editTrigger(e, 'personalities')}>
                            <span className="icon">
                              <i className="fa fa-edit"></i>
                            </span>
                          </a>
                      }
                      {
                        this.state.isEdit.personalities
                        ? <input className="input" type="text" placeholder={this.state.profile.personalities} onChange={(event)=> this.setState({editProfile:{personalities:event.target.value}})} />
                      : this.state.profile.personalities
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
                      Account
                    </h4>
                    <div className="field">
                      <label className="label">Email:</label>
                      {
                        this.state.isEdit.email
                        ? <input className="input" type="text" placeholder={this.state.profile.email} onChange={(event)=> {}} />
                      : this.state.profile.email
                      }
                      <hr/>

                      <label className="label">Password:</label>
                      {
                        this.state.isEdit.password
                        ? <input className="input" type="password" placeholder={this.state.account.password} onChange={(event)=> {}} />
                      : this.state.account.password
                      }
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

        </div>
      </div>
    </CSSTransitionGroup>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    loggedIn : state.loggedIn,
    profile : state.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchProfile : () => dispatch(fetchProfile()),
    patchProfile : (data) => dispatch(patchProfile(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
