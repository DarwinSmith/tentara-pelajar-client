import * as ActionTypes from '../constants'
import firebase from 'firebase'
import axios from 'axios'

const URL = 'http://localhost:3000/api/'

export function loginFirebaseAPI (email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => {
    user.getToken().then(token => {
      localStorage.setItem('token', token)
      localStorage.setItem('userDetail', JSON.stringify(user))
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: { token, user }
      })
    })
  })
  .catch(err => {
    return err
  })
}

export function registerFirebaseAPI (email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(user => {
    user.getToken().then(token => {
      localStorage.setItem('token', token)
      localStorage.setItem('userDetail', JSON.stringify(user))
      dispatch({
        type: ActionTypes.REGISTER_SUCCESS,
        payload: { token, user }
      })
    })
  })
  .catch(err => {
    return err
  })
}
