import * as ActionTypes from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_SKILLS:
      return action.payload
    case ActionTypes.DISENDORSE_SKILLS:
      return action.payload
    case ActionTypes.ENDORSE_SKILLS:
      return action.payload
    case ActionTypes.CREATE_SKILLS:
      return [...state, action.payload]
    case ActionTypes.DELETE_SKILLS:
      return state.filter(skill => skill.id !== action.payload)
    default:
      return state
  }
}
