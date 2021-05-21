import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Framework from './Framework'

const App = () => {
	return (
		<Framework />
	);	
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);