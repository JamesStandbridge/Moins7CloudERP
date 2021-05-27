import React from 'react'
import { connect } from 'react-redux'

import PresidentLayout from './ROLE_PRESIDENT/PresidentLayout'

const AbstractLayout = ({children, token, role, onDisconnect, dispatch, NavigationHandler}) => {

	const handleSwitchTab = (tab, subTab) => {
		dispatch({type: "navigation:tab:change", tab, subTab})
	}

	if(role === "ROLE_PRESIDENT") {
		return (
			<PresidentLayout 
				onDisconnect={onDisconnect} 
				onSwitchTab={handleSwitchTab} 
				tab={NavigationHandler.currentTab}
			>
				{children}
			</PresidentLayout>
		)
	} else {
		return (children)
	}
}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(AbstractLayout)