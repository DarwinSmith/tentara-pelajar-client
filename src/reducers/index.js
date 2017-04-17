import { combineReducers } from 'redux'

import LoggedIn from './LoggedIn'
import Gallery from './galleryReducers'
import Profile from './profileReducers'
import Dashboards from './dashboardsReducers'

const rootReducer = combineReducers({
  loggedIn: LoggedIn,
  gallery: Gallery,
  profile: Profile,
  dashboards: Dashboards
})

export default rootReducer
