import React from 'react'
import axios from 'axios'

class Endorser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      endorsers:[]
    }
  }
  componentDidMount () {
    axios.get(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/skill_endosements?filter[where][profileId]=${this.props.profileId}&filter[where][skillId]=${this.props.skillId}&filter[include]=friend`)
    .then(res => {
      this.setState({
        endorsers: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      <div>
        {this.props.skill.name}
        <div>
          <ul>
          {this.state.endorsers.map(endorser => {
            return (
              <li>{endorser.friend.fullname}</li>
            )
          })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Endorser
