export default (state = {timelines: []}, action) => {
  switch (action.type) {
    case 'GET_TIMELINES':
      return Object.assign({}, state.timelines, {timelines: action.timelines})
      break
    case 'CREATE_POST':
      return Object.assign({}, state.timelines, {timelines: [action.newPost, ...state.timelines]})
      break
    default:
      return state
  }
}
