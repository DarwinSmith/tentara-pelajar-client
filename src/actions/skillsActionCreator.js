import * as ActionTypes from '../constants/index'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = 'AnotherTestSecretToken';
const URL = 'http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api'

export const fetchSkills = (userId) => {
  return (dispatch) => {
    axios.get(`${URL}/profiles/${userId}/skills`)
    .then(skills => {
      dispatch(getSkills(skills.data))
      // console.log(skills.data);
      // skills.data.map(skill => {
      //   axios.get(`${URL}/skill_endorsements?filter[where][skillId]=${skill.id}&filter[include]=friend&filter[include]=skill`)
      //     .then(endorsers => {
      //       console.log(endorsers.data);
      //       // dispatch(getSkills(result.data))
      //     })
      //     .catch(error => {
      //       console.log(error)
      //     })
      // })
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export const getSkills = data => {
  return {
    type: ActionTypes.GET_SKILLS,
    payload: data
  }
}

export const removeSkills = (skillId) => {
  return (dispatch) => {
    const userId = JSON.parse(localStorage.getItem('userProfile')).id
    axios.delete(`${URL}/profiles/${userId}/skills/${skillId}`)
    .then(result => {
      console.log('masuk sini');
      dispatch(deleteSkills(skillId))
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export const deleteSkills = data => {
  return {
    type: ActionTypes.DELETE_SKILLS,
    payload: data
  }
}

export const postSkills = (data) => {
  return (dispatch) => {
    const userId = JSON.parse(localStorage.getItem('userProfile')).id
    axios.post(`${URL}/profiles/${userId}/skills`, {name: data, icon: "fa fa-star-half-o"})
    .then(result => {
      dispatch(createSkills(result.data))
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export const createSkills = data => {
  return {
    type: ActionTypes.CREATE_SKILLS,
    payload: data
  }
}

export const endorseSkills = (id, userOnline, endorsed) => {
  return (dispatch) => {
    const data = {
      "friendId": userOnline,
      "skillId": id,
      "profileId": endorsed
    }
    console.log(data);
    axios.post(`${URL}/skill_endorsements`, data)
    .then(result => {
      dispatch(updateSkills(result.data))
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export const updateSkills = data => {
  return {
    type: ActionTypes.ENDORSE_SKILLS,
    payload: data
  }
}
