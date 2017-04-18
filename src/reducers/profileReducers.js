import * as ActionTypes from '../constants'

const initState ={
  fullname: '',
  phone: '',
  school: "",
  personalities: "",
  activities: "",
  achievement: ""
}

export default (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PROFILE:
      return action.payload
    case ActionTypes.PATCH_PROFILE:
      return action.payload
    default:
      return state
  }
}
