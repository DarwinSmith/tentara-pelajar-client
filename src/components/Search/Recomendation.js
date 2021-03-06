import React, { Component } from 'react';
import './Recomendation.css'

class Recomendation extends Component {
  render() {
    return (
      <div className="Recomendation column is-3">
        <div className="right-sidebar">
          <div className="card">
            <div className="card-title">
              <h1>Sugesti Teman</h1>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-content">
                <img className="profile-banner-pic" src="https://unsplash.it/200/300/?random" alt=""/>
                <br/>
                Irwin Pratajaya
              </div>
              <a href="#" className="button is-info">Tambah teman</a>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-content">
                <img className="profile-banner-pic" src="https://unsplash.it/200/300/?random" alt=""/>
                <br/>
                Irwin Pratajaya
              </div>
              <a href="#" className="button is-info">Tambah teman</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recomendation;
