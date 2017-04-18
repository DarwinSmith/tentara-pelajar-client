import * as ActionTypes from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_PERSONALITIES:
      return action.payload
    case ActionTypes.DISENDORSE_PERSONALITIES:
      return action.payload
    case ActionTypes.ENDORSE_PERSONALITIES:
      return action.payload
    case ActionTypes.CREATE_PERSONALITIES:
      return [...state, action.payload]
    case ActionTypes.DELETE_PERSONALITIES:
      return state.filter(personalities => personalities.id !== action.payload)
    default:
      return state
  }
}
