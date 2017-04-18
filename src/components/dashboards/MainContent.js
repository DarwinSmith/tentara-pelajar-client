/**
 * Created by lightmitch on 4/13/17.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Timeline from './Timeline'
import {getTimelines} from '../../actions'
import Posting from './Posting'
import './style.css'


class MainContent extends Component {
  constructor(props) {
    super(props)
    this.userProfile = JSON.parse(window.localStorage.getItem('userProfile'))
  }

  componentDidMount() {
    this.props.getTimelines(this.userProfile.id)
  }

  render() {
    return (
      <div className="column is-6">
        <Posting/>
        { this.props.timelines.map(timeline => <Timeline key={timeline.id} timeline={timeline}/>) }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  timelines: state.dashboards.timelines
})

const dispatchStateToProps = dispatch => ({
  getTimelines: profileId => dispatch(getTimelines(profileId))
})

export default connect(mapStateToProps, dispatchStateToProps)(MainContent)
