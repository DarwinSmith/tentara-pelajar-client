import * as ActionTypes from '../constants'
import firebase from 'firebase'
import axios from 'axios'

export function loginFirebaseAPI (email, password) {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      user.getToken().then(token => {
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
}

export function registerFirebaseAPI (email, password) {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      user.getToken().then(token => {
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('userDetail', JSON.stringify(user))
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
}

// create profile after new register
export function createProfileAPI () {
  return dispatch => {

  }
}

export function updateProfileAPI () {

}

export function postStatusAPI () {

}

export function postCommentAPI () {

}

export function postReactionAPI () {

}
