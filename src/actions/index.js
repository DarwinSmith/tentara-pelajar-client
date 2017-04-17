import * as ActionTypes from '../constants'
import firebase from 'firebase'
import axios from 'axios'
const URL = 'http://localhost:3000/api'

export function loginFirebaseAPI (email, password) {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      user.getToken().then(token => {
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('userDetail', JSON.stringify(user))
        axios.get(`${URL}/profiles/findOne?filter[where][userId]=${user.UID}`)
        .then(data => {
          dispatch({
            type: ActionTypes.LOGIN_SUCCESS,
            payload: { token, user, data, isLogin: true }
          })
        })
        .catch(error => {
          console.log(error)
        })
      })
    })
    .catch(err => {
      return err
    })
  }
}

export function registerFirebaseAPI (email, password, fullname) {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      user.getToken().then(token => {
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('userDetail', JSON.stringify(user))
        axios.post(`${URL}/profiles`, {
          fullname: fullname,
          userId: user.UID
        })
        .then(data => {
          dispatch({
            type: ActionTypes.REGISTER_SUCCESS,
            payload: { token, user, data, isLogin: true }
          })
        })
        .catch(error => {
          console.log(error)
        })
      })
    })
    .catch(err => {
      return err
    })
  }
}
