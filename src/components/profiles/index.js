import React, { Component } from 'react';

import './profile.css'

class Profile extends Component {
  render() {

    return (
      <div className="columns">
        <div className="column is-three-quarters">
          <div className="card">
            <div className="card-content">
              <div className="media-content">
                <div className="content">
                  <h5 style={{"text-align":"center"}}>
                    Tentang Saya
                  </h5>
                  <div className="card-image">
                    <figure className="image is-128x128">
                        <img src="https://unsplash.it/128/128/?random" alt="photos"/>
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
                <span className="icon">
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </div>

          </div>

          <div className="card">
            <div className="card-content">
              <div className="media-content">
                <div className="content">
                  <h5>
                    Personalities
                  </h5>

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
    );
  }
}

export default Profile;
