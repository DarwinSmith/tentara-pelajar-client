import React, { Component } from 'react';
import './Register.css'

class Register extends Component {
  render() {
    return (
      <div className="Register">
        <div className="columns">
          <div className="column is-6 register">
            <h1 className="title is-1">Register Now</h1>
            <div className="field">
              <label className="label">Name</label>
              <p className="control">
                <input className="input" type="text" placeholder="Full Name" />
              </p>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <p className="control ">
                <input className="input" type="text" placeholder="Email"  />
              </p>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <p className="control ">
                <input className="input" type="password" placeholder="Password"  />
              </p>
            </div>
            <div className="field is-grouped">
              <p className="control">
                <button className="button is-primary">Register</button>
              </p>
            </div>
          </div>
          <div className="column is-6 summary">
            <h1 className="title is-1">Tentara Pelajar</h1>
            <p>Sosial Media hasil karya anak bangsa, media generasi muda sekolah.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
