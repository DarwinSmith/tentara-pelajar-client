import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { connect } from 'react-redux';
import { fetchSkills, endorseSkills, fetchPersonalities, endorsePersonalities, fetchProfile } from '../../actions'
import './profile.css';

class Profile extends Component {
  constructor () {
    super()
    this.state = {
      skill: '',
      personalities: ''
    }
    this.userId = JSON.parse(localStorage.getItem('userProfile')).id
  }
  componentDidMount () {
    this.props.fetchSkills(this.props.match.params.id)
    this.props.fetchPersonalities(this.props.match.params.id)
    this.props.fetchProfile(this.props.match.params.id)
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
            <div className="column is-three-quarters">
              <div className="card">
                <div className="card-content">
                  <div className="media-content">
                    <div className="content">
                      <h5 style={{"textAlign":"center"}}>
                        Tentang Saya
                      </h5>
                      <div className='card-image'>
                        <figure style={{display: 'block', margin: 'auto'}} className='image is-128x128'>
                          <img style={{borderRadius: 100, widht: 128, height: 128}} src='https://unsplash.it/128/128/?random' alt='photos'/>
                        </figure>
                        {
                          this.props.match.params.id == this.userId ?
                          <span></span>:
                        <div>
                          <br />
                          <a style={{display: 'block', marginLeft: '30%', marginRight: '30%'}} href="#" className="button is-info"><i className="fa fa-user-plus">Tambahkan Teman</i></a>
                        </div>
                        
                        }
                      </div>
                    <hr style={{height:2}}/>
                      <ul>
                        <li>Nama Lengkap : {this.props.profile.fullname} </li>
                        <li>Sekolah      : {this.props.profile.school}</li>
                        <li>Telepon      : {this.props.profile.phone}</li>
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
                        this.props.personalities.length === 0 ?
                        <img style={{width:"3%"}} src={require("../../assets/image/loading.gif")} alt="Loading" /> :
                        <div>
                          {
                            this.props.personalities.map((value, index) => (
                              <div className="chip" key={index}>
                                <img src="https://unsplash.it/30/30/?random" alt="Contact Person" />
                                <img src="https://unsplash.it/30/30/?random" alt="Contact Person" />
                                <img src="https://unsplash.it/30/30/?random" alt="Contact Person" />
                                <img src="https://unsplash.it/30/30/?random" alt="Contact Person" />
                                <p>{value.content}</p>
                                {
                                  this.props.match.params.id == this.userId ?
                                  <span></span>:
                                  <a href="#" onClick={() => this.props.endorsePersonalities(value.id)}>
                                    <span className="icon">
                                      <i className="fa fa-plus-circle"></i>
                                    </span>
                                  </a>
                                }
                              </div>
                            ))
                          }
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
                        Skills
                      </h5>
                      {
                        this.props.skills.length === 0 ?
                        <img style={{width:"3%"}} src={require("../../assets/image/loading.gif")} alt="Loading" /> :
                          <div>
                            {
                              this.props.skills.map((value, index) => (
                                <div className="chip" key={index}>
                                  <img src="https://unsplash.it/30/30/?random" alt="Contact Person" />
                                  <img src="https://unsplash.it/30/30/?random" alt="Contact Person" />
                                  <img src="https://unsplash.it/30/30/?random" alt="Contact Person" />
                                  <img src="https://unsplash.it/30/30/?random" alt="Contact Person" />
                                  <p>{value.name}</p>
                                  <span className="icon">
                                    <i className={value.icon}></i>
                                  </span>
                                  {
                                    this.props.match.params.id == this.userId ?
                                    <span></span>:
                                    <a href="#" onClick={() => this.props.endorseSkills(value.id)}>
                                      <span className="icon">
                                        <i className="fa fa-plus-circle"></i>
                                      </span>
                                    </a>
                                  }
                                </div>
                              ))
                            }
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
                        <li>{this.props.profile.experience}</li>
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
                        <li>{this.props.profile.activity}</li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </div>

          </div>
        </div>
      </CSSTransitionGroup>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    profile: state.profile,
    skills: state.skills,
    personalities: state.personalities
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchSkills: (id) => dispatch(fetchSkills(id)),
    endorseSkills: (skillId) => dispatch(endorseSkills(skillId)),
    fetchPersonalities: (id) => dispatch(fetchPersonalities(id)),
    endorsePersonalities: (personalitiesId) => dispatch(endorsePersonalities(personalitiesId)),
    fetchProfile: (id) => dispatch(fetchProfile(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
