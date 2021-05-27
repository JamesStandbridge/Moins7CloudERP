import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';

import { HashRouter, Route, Switch, Redirect, BrowserRouter } from "react-router-dom";


import Dashboard from "./pages/admin/Dashboard";

const Router = ({AuthHandler, dispatch, children}) => {
	return (
		<BrowserRouter>
			{children}
			<Switch>
				<Route path="/" component={Dashboard} />
			</Switch>
		</BrowserRouter>
	);
}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(Router);
