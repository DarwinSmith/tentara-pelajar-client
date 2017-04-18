import axios from 'axios'

export const getTimelines = profileId => dispatch => {
  axios.get(`http://localhost:3001/api/profiles/${profileId}/timelines`)
    .then(response => {
      console.log('sds', response.data.timelines);
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
      let postId = response.data.id
      axios.get(`http://localhost:3001/api/posts/${postId}?filter[include]=profile`)
        .then(res => {
          dispatch({
            type: 'CREATE_POST',
            newPost: res.data
          })
        })
        .catch(err => console.error(err.message))
    })
    .catch(err => console.error(err))
}
