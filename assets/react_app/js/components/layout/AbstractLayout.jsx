import React from 'react'
import { connect } from 'react-redux'

import TokenManager from '../../services/security/TokenManager'
import AdminLayout from './ADMIN/AdminLayout'

const AbstractLayout = ({children, token, role, onDisconnect, dispatch, NavigationHandler}) => {

	const handleSwitchTab = (tab, subTab) => {
		dispatch({type: "navigation:tab:change", tab, subTab})
	}

	const user = TokenManager.getUser(token)

	if(role === "ROLE_PRESIDENT" || role === "ROLE_ADMIN" || role === "ROLE_DIRECTOR") {

		return (
			<AdminLayout 
				onDisconnect={onDisconnect} 
				onSwitchTab={handleSwitchTab} 
				tab={NavigationHandler.currentTab}
				user={user}
			>
				{children}
			</AdminLayout>
		)
	} else {
		return (<>{children}</>)
	}
}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(AbstractLayout)