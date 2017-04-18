import { combineReducers } from 'redux'

import LoggedIn from './LoggedIn'
import Gallery from './galleryReducers'
import Profile from './profileReducers'
import Dashboards from './dashboardsReducers'
import Skills from './skillsReducers'
import Personalities from './personalitiesReducers'

const rootReducer = combineReducers({
  loggedIn: LoggedIn,
  gallery: Gallery,
  profile: Profile,
  dashboards: Dashboards,
  skills: Skills,
  personalities: Personalities
})

export default rootReducer
