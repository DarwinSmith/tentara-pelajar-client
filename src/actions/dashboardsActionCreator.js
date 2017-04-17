import axios from 'axios'

export const getTimelines = profileId => dispatch => {
  axios.get(`http://localhost:3001/api/profiles/${profileId}/timelines`)
    .then(response => {
      dispatch({
        type: 'GET_TIMELINES',
        timelines: response.data.timelines
      })
    })
    .catch(err => console.error(err))
}

export const createPost = (profileId, contents) => dispatch => {
  axios.post(`http://localhost:3001/api/profiles/${profileId}/posts`,
    {
      content: contents
    }
  )
    .then(response => {
      dispatch({
        type: 'CREATE_POST',
        newPost: response.data
      })
    })
    .catch(err => console.error(err))
}