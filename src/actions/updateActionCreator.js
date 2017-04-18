import * as ActionTypes from '../constants/index'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = 'AnotherTestSecretToken';
const URL = 'http://localhost:3001/api'

export const getProfile = data => {
  return {
    type: ActionTypes.GET_PROFILE,
    payload: data
  }
}

export const fetchProfile = () => {
  return (dispatch) => {
    const email = JSON.parse(localStorage.getItem('userDetail')).email
    const userId = JSON.parse(localStorage.getItem('userProfile')).id
    axios.get(`${URL}/profiles/${userId}`)
    .then(result => {
      const data = Object.assign({}, result.data, {email:email})
      dispatch(getProfile(data))
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
  console.log(data);
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
