import * as ActionTypes from '../constants/index'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = 'AnotherTestSecretToken';
const URL = 'http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api'

export const getProfile = data => {
  return {
    type: ActionTypes.GET_PROFILE,
    payload: data
  }
}

export const fetchProfile = (id) => {
  return (dispatch) => {
      axios.get(`${URL}/profiles/${id}`)
        .then(result => {
          dispatch(getProfile(result.data))
        })
        .catch(error => {
          console.log(error)
        })
  }
}

export const updateProfile = data => {
  return {
    type: ActionTypes.PATCH_PROFILE,
    payload: data
  }
}

export const patchProfile = (data) => {
  return (dispatch) => {
    const userId = JSON.parse(localStorage.getItem('userProfile')).id
    console.log(userId);
      axios.patch(`${URL}/profiles/${userId}`, data)
    .then(result => {
      dispatch(updateProfile(result.data))
    })
    .catch(error => {
      console.log(error)
    })
  }
}
