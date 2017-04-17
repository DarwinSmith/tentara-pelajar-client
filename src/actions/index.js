import * as ActionTypes from '../constants'
import firebase from 'firebase'
import axios from 'axios'
import { getPhotos, getPhoto, deletePhoto, postPhoto } from './galleryActionCreator'
import { patchProfile, fetchProfile } from './profileActionCreator'
export { getPhotos, getPhoto, deletePhoto, postPhoto, patchProfile, fetchProfile }
axios.defaults.headers.common['Authorization'] = 'AnotherTestSecretToken';
const URL = 'http://localhost:3001/api'


export function loginFirebaseAPI (email, password) {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      user.getToken().then(token => {
        axios.get(`${URL}/profiles/findOne?filter[where][userId]=${user.uid}`)
        .then(data => {
          dispatch({
            type: ActionTypes.LOGIN_SUCCESS,
            payload: { token, user, data: data.data, isLogin: true }
          })
        })
        .catch(error => {
          console.log(error)
        })
      })
    })
    .catch(err => {
      dispatch({
        type: ActionTypes.LOGIN_ERROR,
        payload: { error: err }
      })
    })
  }
}

export function registerFirebaseAPI (email, password, fullname) {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      user.getToken().then(token => {
        axios.post(`${URL}/profiles`, {
          userId: user.uid,
          fullname: fullname
        })
        .then(data => {
          dispatch({
            type: ActionTypes.REGISTER_SUCCESS,
            payload: { token, user, data: data.data, isLogin: true }
          })
        })
        .catch(error => {
          console.log(error)
        })
      })
    })
    .catch(err => {
      dispatch({
        type: ActionTypes.LOGIN_ERROR,
        payload: { error: err }
      })
    })
  }
}

export function refreshLoggedInData () {
  return {
    type: ActionTypes.REFRESH_LOGGEDIN
  }
}
