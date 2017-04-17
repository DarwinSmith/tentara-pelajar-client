import ActionTypes from '../constants'

export const getPhotos = (data) => {
  return {
    type: ActionTypes.GET_PHOTOS,
    payload: data
  }
}

export const getPhoto = data => {
  return {
    type: ActionTypes.GET_PHOTO,
    payload: data
  }
}

export const deletePhoto = data => {
  return {
    type: ActionTypes.DELETE_PHOTO,
    payload: data
  }
}

export const postPhoto = data => {
  return {
    type: ActionTypes.POST_PHOTO,
    payload: data
  }
}
