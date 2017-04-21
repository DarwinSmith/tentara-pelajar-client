import * as ActionTypes from '../constants/index'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = 'AnotherTestSecretToken';
const URL = 'http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api'

export const fetchPersonalities = (id) => {
  return (dispatch) => {
    axios.get(`${URL}/profiles/${id}/personalities`)
    .then(result => {
      dispatch(getPersonalities(result.data))
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export const getPersonalities = data => {
  return {
    type: ActionTypes.GET_PERSONALITIES,
    payload: data
  }
}

export const removePersonalities = (skillId) => {
  return (dispatch) => {
    const userId = JSON.parse(localStorage.getItem('userProfile')).id
    axios.delete(`${URL}/profiles/${userId}/personalities/${skillId}`)
    .then(result => {
      console.log('masuk sini');
      dispatch(deletePersonalities(skillId))
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export const deletePersonalities = data => {
  return {
    type: ActionTypes.DELETE_PERSONALITIES,
    payload: data
  }
}

export const postPersonalities = (data) => {
  return (dispatch) => {
    const userId = JSON.parse(localStorage.getItem('userProfile')).id
    axios.post(`${URL}/profiles/${userId}/personalities`, {content: data})
    .then(result => {
      console.log('masuk sini');
      dispatch(createPersonalities(result.data))
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export const createPersonalities = data => {
  return {
    type: ActionTypes.CREATE_PERSONALITIES,
    payload: data
  }
}

export const endorsePersonalities = (id, userOnline, endorsed) => {
  return (dispatch) => {
    const data = {
      "friendId": userOnline,
      "skillId": id,
      "profileId": endorsed
    }
    console.log(data);
    axios.post(`${URL}/personalities_endorsements`, data)
    .then(result => {
      dispatch(updatePersonalities(result.data))
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export const updatePersonalities = data => {
  return {
    type: ActionTypes.ENDORSE_PERSONALITIES,
    payload: data
  }
}
