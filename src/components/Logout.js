import React from 'react'
import { Redirect } from 'react-router-dom'

const Logout = () => {
  window.localStorage.clear()
  return (
    <Redirect to='/login' />
  )
}
export default Logout
