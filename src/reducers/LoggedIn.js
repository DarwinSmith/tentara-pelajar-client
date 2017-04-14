import * as ActionTypes from '../constants'
const initState = {}

export default (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return action.payload
    default:
      return state
  }
}
