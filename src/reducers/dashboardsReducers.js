export default (state = {timelines: []}, action) => {
  switch (action.type) {
    case 'GET_TIMELINES':
      console.log('reduces', action.timelines);
      return Object.assign({}, state.timelines, {timelines: action.timelines})
    case 'CREATE_POST':
      return Object.assign({}, state.timelines, {timelines: [action.newPost, ...state.timelines]})
    default:
      return state
  }
}
