import React, { Component } from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom'

class Navigation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Navigation">
        <nav className="nav has-shadow navigation">
          <div className="container">
            <div className="nav-left search-left">
              <a className="nav-item">
                <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
              </a>
              <div className="nav-item search">
                <p className="control">
                  <input className="input" id="search" type="text" placeholder="Find something" />
                </p>
              </div>
            </div>
            <div className="nav-right nav-menu">

              <Link to={'/'} className="nav-item is-tab is-hidden-mobile is-active" style={{color:"black"}}>Home</Link>
              
              <Link className="nav-item is-tab is-hidden-mobile" to={'/profile'}>
                <figure className="image is-16x16" >
                  <img src="http://bulma.io/images/jgthms.png" alt="profilepicture"/>
                </figure>
                Didit Suryadi
              </Link>

              {/*<a className="nav-item is-tab is-hidden-mobile" style={{color:"black"}}>*/}
              {/*</a>*/}
              <Link className="nav-item is-tab is-hidden-mobile" to="/gallery">
                Gallery
              </Link>
              <a className="nav-item is-tab is-hidden-mobile level-item" style={{color:"black"}}>
                <span className="icon">
                  <i className="fa fa-bell"></i>
                </span>
              </a>
              <a className="nav-item is-tab is-hidden-mobile level-item" style={{color:"black"}}>
                <span className="icon">
                  <i className="fa fa-gear"></i>
                </span>
              </a>
            </div>
          </div>
        </nav>
        <progress className="progress is-small is-success" value="15" max="100">100%</progress>
      </div>
    );
  }
}

export default Navigation;
