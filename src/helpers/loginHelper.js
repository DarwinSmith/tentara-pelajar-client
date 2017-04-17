import firebase from 'firebase'

/*
  * firebase.auth().currentUser.updateEmail('newEmail').then().catch
  * firebase.auth().currentUser.updatePassword('newPassword').then().catch
  * firebase.auth().currentUser.sendEmailVerification().then().catch
  * firebase.auth().sendPasswordResetEmail('emailAddress').then().catch
  * firebase.auth().currentUser.delete().then().catch()
*/

export const registerFirebase = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(user => {
    user.getToken().then(token => {
      return {user, token}
    })
  })
  .catch(err => {
    return err
  })
}

export const loginFirebase = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => {
    user.getToken().then(token => {
      return {user, token}
    })
  })
  .catch(err => {
    return err
  })
}
export const logoutFirebase = () => {
  firebase.auth().signOut()
  .then(() => {
    return true
  })
  .catch(err => {
    return err
  })
}
export const authFirebase = (token) => {
  firebase.auth().signInWithCustomToken(token)
  .then(user => {
    user.getToken().then(token => {
      return {user, token}
    })
  })
  .catch(err => {
    return err
  })
}
