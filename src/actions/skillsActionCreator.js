import * as ActionTypes from '../constants/index'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = 'AnotherTestSecretToken';
const URL = 'http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api'

export const fetchSkills = (userId) => {
  return (dispatch) => {
    axios.get(`${URL}/profiles/${userId}/skills`)
    .then(result => {
      dispatch(getSkills(result.data))
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

export const endorseSkills = (data) => {
  return (dispatch) => {
    const userId = JSON.parse(localStorage.getItem('userProfile')).id
      axios.patch(`${URL}/profiles/${userId}`, data)
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
