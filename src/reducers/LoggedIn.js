import * as ActionTypes from '../constants'
const initState = {
  token: '',
  user: '',
  isLogin: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return action.payload
    case ActionTypes.REGISTER_SUCCESS:
    console.log('fired')
      return action.payload
    default:
      return state
  }
}
