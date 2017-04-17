import * as ActionTypes from '../constants'
const initState = {
  token: '',
  user: '',
  data: '',
  isLogin: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return action.payload
    case ActionTypes.REGISTER_SUCCESS:
      return action.payload
    default:
      return state
  }
}
