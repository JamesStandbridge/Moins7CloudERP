import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';

import { HashRouter, Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

//single pages
import Login from "./pages/single/Login";
// import Register from "./pages/single/Register";

const Router = ({AuthHandler, dispatch}) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Login} />
			</Switch>
		</BrowserRouter>
	);
}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(Router);
