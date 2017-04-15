import React, { Component } from 'react';
import './List.css'

class List extends Component {
  render() {
    return (
      <div className="list column is-9">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="http://bulma.io/images/placeholders/128x128.png" alt="Search" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>John Smith</strong> <small>johnsmith</small>
                  <br />
                </p>
                <p>111 Junior High School Students</p>
              </div>
              <nav className="level is-mobile">
                <div className="level-left">
                  <a className="level-item">
                    <span className="icon is-small"><i className="fa fa-user-circle"></i></span>
                     view
                  </a>
                  <a className="level-item">
                    <span className="icon is-small"><i className="fa fa-comments"></i></span>
                    message
                  </a>
                  <a className="level-item">
                    <span className="icon is-small"><i className="fa fa-user-plus"></i></span>
                    add friend
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default List;
