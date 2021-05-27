import { combineReducers } from 'redux'

import SessionHandler from './security/SessionHandler'
import NavigationHandler from './menu/NavigationHandler'

export default combineReducers({
	SessionHandler,
	NavigationHandler
})