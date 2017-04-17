import React, { Component } from 'react'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = 'AnotherTestSecretToken'
const URL = 'http://localhost:3001/api'

import './profile.css'
import Navigation from '../Navigation'

class Profile extends Component {
  constructor () {
    super()
    this.state = {
      skill: '',
      personalities: ''
    }
  }
  componentDidMount () {
    let profileData = JSON.parse(window.localStorage.getItem('userProfile'))
    axios.get(`${URL}/profiles/${profileData.id}/skills`)
    .then(skill => {
      this.setState({skill: skill.data})
    })
    .catch(err => {
      console.log(err)
    })
    axios.get(`${URL}/profiles/${profileData.id}/personalities`)
    .then(personalities => {
      this.setState({personalities: personalities.data})
    })
    .catch(err => {
      console.log(err)
    })
  }
  render () {
    return (
      <div>
        <Navigation/>
        <div className='columns'>
          <div className='column is-three-quarters'>
            <div className='card'>
              <div className='card-content'>
                <div className='media-content'>
                  <div className='content'>
                    <h5 style={{"text-align":"center"}}>
                      Tentang Saya
                    </h5>
                    <div className='card-image'>
                      <figure className='image is-128x128'>
                        <img src='https://unsplash.it/128/128/?random' alt='photos'/>
                      </figure>
                    </div>

                    <ul>
                      <li>Nama Lengkap: </li>
                      <li>Sekolah: </li>
                      <li>Telepon: </li>
                    </ul>
                  </div>
                </div>
                <a>
                <span className='icon'>
                  <i className='fa fa-angle-down' aria-hidden='true'></i>
                </span>
                </a>
              </div>

            </div>

            <div className='card'>
              <div className='card-content'>
                <div className='media-content'>
                  <div className='content'>
                    <h5>
                      Personalities
                    </h5>
                    {
                      this.state.personalities === '' ?
                      <p>Fetching Data</p> :
                        <div className="columns">
                          <div className="column is-4">
                            <div className="card ">
                              <article className="media">
                                <div className="media-content">
                                  <div className="content">
                                    <h5>
                                      Penghargaan
                                    </h5>
                                    <ul>
                                      <li>Juara 1 Lomba Matematika</li>
                                      <li>Juara 1 Lomba Fisika</li>
                                    </ul>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>

                          <div className="column is-4">
                            <div className="card ">
                              <article className="media">
                                <div className="media-content">
                                  <div className="content">
                                    <h5>
                                      Penghargaan
                                    </h5>
                                    <ul>
                                      <li>Juara 1 Lomba Matematika</li>
                                      <li>Juara 1 Lomba Fisika</li>
                                    </ul>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>

                          <div className="column is-4">
                            <div className="card ">
                              <article className="media">
                                <div className="media-content">
                                  <div className="content">
                                    <h5>
                                      Penghargaan
                                    </h5>
                                    <ul>
                                      <li>Juara 1 Lomba Matematika</li>
                                      <li>Juara 1 Lomba Fisika</li>
                                    </ul>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>
                        </div>
                    }


                    <a>
                    <span className="icon">
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <div className="media-content">
                  <div className="content">
                    <h5>
                      Skills
                    </h5>
                    {
                      this.state.skill === '' ?
                      <p>Fetching Data</p> :
                        <div>
                          <div className="chip">
                            <img src="https://unsplash.it/30/30/?random" alt="Contact Person" />
                            <img src="https://unsplash.it/30/30/?random" alt="Contact Person" />
                            <img src="https://unsplash.it/30/30/?random" alt="Contact Person" />
                            <img src="https://unsplash.it/30/30/?random" alt="Contact Person" />

                            <p>MakanKerupuk</p>
                            <span className="icon">
                            <i className="fa fa-plus-circle"></i>
                          </span>
                          </div>

                          <div className="chip">
                            <img src="https://unsplash.it/30/30/?random" alt="Contact Person" />
                            <img src="https://unsplash.it/30/30/?random" alt="Contact Person" />

                            <p>Panjat Pinang</p>
                            <span className="icon">
                            <i className="fa fa-plus-circle"></i>
                          </span>
                          </div>
                        </div>
                    }


                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <div className="media-content">
                  <div className="content">
                    <h5>
                      Posting
                    </h5>

                    <a>
                    <span className="icon">
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </a>

                  </div>
                </div>
              </div>
            </div>


          </div>


          <div className="column">
            <div className="card" id="sidebar">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <h5>
                      Penghargaan
                    </h5>
                    <ul>
                      <li>Juara 1 Lomba Matematika</li>
                      <li>Juara 1 Lomba Fisika</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>

            <div className="card" id="sidebar">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <h5>
                      Aktivitas
                    </h5>
                    <ul>
                      <li>Ketua OSIS</li>
                      <li>Ekskul Rohis</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>


          </div>

        </div>
      </div>
    );
  }
}

export default Profile;
