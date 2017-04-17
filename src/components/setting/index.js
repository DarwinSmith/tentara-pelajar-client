import React, { Component } from 'react';

import './setting.css'

class Setting extends Component {
  constructor () {
    super()
    this.state = {
      profile: {},
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
    this.setState({
      profile: {
        name: 'Irwin Pratajaya',
        phone: '08123456789',
        school: "SMA 8 Jakarta",
        personalities: "Good boy",
        activities: "Ketua OSIS",
        achievement: "Juara 1 lomba"
      },
      account: {
        email: "irwinpratajaya@gmail.com",
        password: "123123"
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
  }

  render() {
    // console.log(this.state.isEdit)
    return (
      <div className="">
        <h1>Account Setting</h1>
        <div className="columns">
          <div className="column is-12">
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
                        ? <input className="input" type="text" placeholder={this.state.profile.name} onChange={this.changeName.bind(this)} />
                        : this.state.profile.name
                      }
                      {
                        this.state.isEdit.name
                        ? <a href="#" onClick={e => this._saveEdit(e, 'name')}>Save</a>
                        : <a href="#" onClick={e => this._editTrigger(e, 'name')}>Edit</a>
                      }
                      <hr/>

                      <label className="label">Telepon</label>
                      {
                        this.state.isEdit.phone
                        ? <input className="input" type="text" placeholder={this.state.profile.phone} onChange={this.changeName.bind(this)} />
                      : this.state.profile.phone
                      }
                      {
                        this.state.isEdit.phone
                        ? <a href="#" onClick={e => this._saveEdit(e, 'phone')}>Save</a>
                        : <a href="#" onClick={e => this._editTrigger(e, 'phone')}>Edit</a>
                      }
                      <hr/>

                      <label className="label">Sekolah</label>
                      {
                        this.state.isEdit.school
                        ? <input className="input" type="text" placeholder={this.state.profile.school} onChange={this.changeName.bind(this)} />
                      : this.state.profile.school
                      }
                      {
                        this.state.isEdit.school
                        ? <a href="#" onClick={e => this._saveEdit(e, 'school')}>Save</a>
                        : <a href="#" onClick={e => this._editTrigger(e, 'school')}>Edit</a>
                      }
                      <hr/>

                      <label className="label">Personalities</label>
                      {
                        this.state.isEdit.personalities
                        ? <input className="input" type="text" placeholder={this.state.profile.personalities} onChange={this.changeName.bind(this)} />
                      : this.state.profile.personalities
                      }
                      {
                        this.state.isEdit.personalities
                        ? <a href="#" onClick={e => this._saveEdit(e, 'personalities')}>Save</a>
                        : <a href="#" onClick={e => this._editTrigger(e, 'personalities')}>Edit</a>
                      }
                      <hr/>

                      <label className="label">Aktivitas</label>
                      {
                        this.state.isEdit.activities
                        ? <input className="input" type="text" placeholder={this.state.profile.activities} onChange={this.changeName.bind(this)} />
                      : this.state.profile.activities
                      }
                      {
                        this.state.isEdit.activities
                        ? <a href="#" onClick={e => this._saveEdit(e, 'activities')}>Save</a>
                        : <a href="#" onClick={e => this._editTrigger(e, 'activities')}>Edit</a>
                      }
                      <hr/>

                      <label className="label"> Penghargaan</label>
                      {
                        this.state.isEdit.achievement
                        ? <input className="input" type="text" placeholder={this.state.profile.achievement} onChange={this.changeName.bind(this)} />
                      : this.state.profile.achievement
                      }
                      {
                        this.state.isEdit.achievement
                        ? <a href="#" onClick={e => this._saveEdit(e, 'achievement')}>Save</a>
                        : <a href="#" onClick={e => this._editTrigger(e, 'achievement')}>Edit</a>
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
                        ? <input className="input" type="text" placeholder={this.state.account.email} onChange={this.changeName.bind(this)} />
                      : this.state.account.email
                      }
                      {
                        this.state.isEdit.email
                        ? <a href="#" onClick={e => this._saveEdit(e, 'email')}>Save</a>
                        : <a href="#" onClick={e => this._editTrigger(e, 'email')}>Edit</a>
                      }
                      <hr/>

                      <label className="label">Password:</label>
                      {
                        this.state.isEdit.password
                        ? <input className="input" type="password" placeholder={this.state.account.password} onChange={this.changeName.bind(this)} />
                      : this.state.account.password
                      }
                      {
                        this.state.isEdit.password
                        ? <a href="#" onClick={e => this._saveEdit(e, 'password')}>Save</a>
                        : <a href="#" onClick={e => this._editTrigger(e, 'password')}>Edit</a>
                      }

                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Setting
