import { combineReducers } from 'redux'

import LoggedIn from './LoggedIn'
import Gallery from './galleryReducers'
import Profile from './profileReducers'

const rootReducer = combineReducers({
  loggedIn: LoggedIn,
  gallery: Gallery,
  profile: Profile,
})

export default rootReducer
