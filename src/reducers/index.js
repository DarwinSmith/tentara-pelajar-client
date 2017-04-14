import { combineReducers } from 'redux'

import LoggedIn from './LoggedIn'

const rootReducer = combineReducers({
  loggedIn: LoggedIn
})

export default rootReducer
