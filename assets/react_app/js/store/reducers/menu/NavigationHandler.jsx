
const initialState = {
	currentTab: "Dashboard",
	currentSubTab: "Dashboard"
}

function NavigationHandler(state = initialState, action) {
	switch(action.type) {
		case 'navigation:tab:change': 
			return {...state, currentTab: action.tab, currentSubTab: action.subTab}

		case 'navigation:subtab:change':
			return {...state, currentSubTab: action.subTab}

		default:
			return state
	}
}

export default NavigationHandler;