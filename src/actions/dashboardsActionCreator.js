import axios from 'axios'

export const getTimelines = profileId => dispatch => {
  axios.get(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/profiles/${profileId}/timelines`)
    .then(response => {
      dispatch({
        type: 'GET_TIMELINES',
        timelines: response.data.timelines
      })
    })
    .catch(err => {
      console.log(err);
      console.error(err.message)
    })
}

export const createPost = (profileId, contents, photos) => dispatch => {
  console.log('photos', photos);
  axios.post(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/profiles/${profileId}/posts`,
    {
      content: contents
    })
  .then(response => {
    let postId = response.data.id
    axios.all(photos.map(photo => {
    return axios.post(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/post_media`,
      {
        postId: postId,
        url: photo
      })
    }))
    .then(photo => {
      console.log(photo)
      axios.get(`http://tentara-pelajar-server-dev.ap-southeast-1.elasticbeanstalk.com/api/posts/${postId}?filter={"include":["profile","postMedia"]`)
      .then(res => {
        res.data.post_media = photo.data
          dispatch({
            type: 'CREATE_POST',
            newPost: res.data
          })
        })
      .catch(err => console.error(err.message))
    })
  })
  .catch(err => console.error(err.message))
}
