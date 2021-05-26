
const initialState = {
	token: null
}

function SessionHandler(state = initialState, action) {
	switch(action.type) {
		case 'session:disconnect':
			return initialState
		
		case 'session:authenticate': 
			return {...state, token: action.token}

		default:
			return state
	}
}

export default SessionHandler;