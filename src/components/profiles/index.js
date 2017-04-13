import React, { Component } from 'react';

import './profile.css'

class Profile extends Component {
  render() {

    return (
      <div className="columns">
        <div className="column is-three-quarters">
          <div className="card">
            <div className="card-image">
              <figure className="image is-128x128 is-centered">
                  <img src="http://bulma.io/images/placeholders/128x128.png" alt="photos"/>
              </figure>
            </div>

            <div className="card-content">
              <div className="media-content">
                <div className="content">
                  <p>
                    My profile
                  </p>

                  <p>Tentang</p>
                  <ul>
                    <li>Nama Lengkap: </li>
                    <li>Sekolah: </li>
                    <li>Telepon: </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="media-content">
                <div className="content">
                  <p>
                    Personalities
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="media-content">
                <div className="content">
                  <p>
                    Recomendations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="media-content">
                <div className="content">
                  <p>
                    Posting
                  </p>
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
                    <p>
                      Experience <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="card" id="sidebar">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      Activities
                    </p>
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
