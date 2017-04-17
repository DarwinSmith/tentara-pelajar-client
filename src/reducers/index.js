import { combineReducers } from 'redux'

import LoggedIn from './LoggedIn'
import Gallery from './galleryReducers'

const rootReducer = combineReducers({
  loggedIn: LoggedIn,
  gallery: Gallery
})

export default rootReducer
