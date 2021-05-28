import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { connect } from 'react-redux'

import { HashRouter, Route, Switch, Redirect, BrowserRouter } from "react-router-dom"

import Layout from './components/layout/AbstractLayout'
import TokenManager from './services/security/TokenManager'

import Dashboard from "./pages/admin/Dashboard"
import Members from "./pages/admin/Members"

const Router = ({AuthHandler, SessionHandler, dispatch, children, onDisconnect}) => {
	return (
		<BrowserRouter>
			<Layout 
				role={TokenManager.getRole(SessionHandler.token)} 
				token={SessionHandler.token}
				onDisconnect={onDisconnect}
			>
				<Switch>
					<Route path="/adherents" component={Members} />
					<Route path="/" component={Dashboard} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(Router);
