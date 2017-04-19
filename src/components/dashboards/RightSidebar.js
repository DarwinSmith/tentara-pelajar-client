/**
 * Created by lightmitch on 4/13/17.
 */
import React, {Component} from 'react'
import axios from 'axios'
import FriendSuggestion from './FriendSuggestion'
import './style.css'

class RightSidebar extends Component {

  constructor() {
    super()
    this.state = {
      friendSuggestion: []
    }
  }

  componentDidMount() {
    this._getFriendSuggestions()
  }

  _getFriendSuggestions() {
    axios.get(`http://localhost:3001/api/profiles?filter[limit]=10&filter[include]=school`)
      .then(response => {
        this.setState({
          friendSuggestion: response.data
        })
      })
      .catch(err => console.log(err))

  }

  render() {
    return (
      <div className="column is-3">
        <div className="right-sidebar">
          <div className="card">
            <div className="card-title">
              <h1>Sugesti Teman</h1>
            </div>
          </div>
          {this.state.friendSuggestion.map(suggestion => {
            return <FriendSuggestion key={suggestion.id} suggestion={suggestion} />
          })}
        </div>
      </div>
    )
  }
}

export default RightSidebar
