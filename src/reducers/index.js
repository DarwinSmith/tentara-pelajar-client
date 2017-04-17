import { combineReducers } from 'redux'

import LoggedIn from './LoggedIn'
import Gallery from './galleryReducers'
import Dashboards from './dashboardsReducers'

const rootReducer = combineReducers({
  loggedIn: LoggedIn,
  gallery: Gallery,
  dashboards: Dashboards
})

export default rootReducer
