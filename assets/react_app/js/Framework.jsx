import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import Router from './Router'

import Layout from './components/layout/AbstractLayout'

import TokenManager from './services/security/TokenManager'
import Theme from './Theme'

import Login from './pages/single/Login'

const Framework = ({SessionHandler, dispatch}) => {

	const handleDisconnect = () => {
		dispatch({type: "session:disconnect"})
	}

	return (
		<>
			<Theme>
				{TokenManager.isConnected(SessionHandler.token) ? (
					<Router>
						<Layout 
							role={TokenManager.getRole(SessionHandler.token)} 
							token={SessionHandler.token}
							onDisconnect={handleDisconnect}
						>
							
						</Layout>
					</Router>

				) : (
					<Login />
				)}
			</Theme>
		</>
	)
}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(Framework);