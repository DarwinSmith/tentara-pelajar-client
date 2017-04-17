import * as ActionTypes from '../constants'
const initState = {
  token: '',
  user: '',
  data: '',
  error: '',
  isLogin: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return action.payload
    case ActionTypes.LOGIN_ERROR:
      return action.payload
    case ActionTypes.REGISTER_SUCCESS:
      return action.payload
    case ActionTypes.REFRESH_LOGGEDIN:
      let data = JSON.parse(window.localStorage.getItem('userData'))
      let user = JSON.parse(window.localStorage.getItem('userDetail'))
      let token = window.localStorage.getItem('token')
      return {data, user, token}
    default:
      return state
  }
}
