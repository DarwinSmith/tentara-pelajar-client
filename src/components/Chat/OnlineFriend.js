import React from 'react'
import axios from 'axios'

function getProfileFriend () {
  let userId = JSON.parse(window.localStorage.getItem('userDetail')).uid
  axios.get(`http://localhost:3001/api/profiles/${userId}/friends`)
  .then(friends => {
    console.log(friends)
  })
  .catch(err => {
    console.log(err)
  })
}

const OnlineFriend = () => {
  return (
    <h2>Online Friend..</h2>
  )
}

export default OnlineFriend
