import React, { useEffect } from 'react'
import GlobalFonts from './style/fonts/fonts'

import BaseTheme from './style/themes/BaseTheme'

import { ThemeProvider } from 'styled-components'

require("./style/css/BaseTheme.css")

const Theme = ({children}) => {

	useEffect(() => {
		document.body.style.backgroundColor = "white"
		//document.body.style.backgroundColor = "grey"
	})

	return (
		<ThemeProvider theme={BaseTheme}>
			<GlobalFonts />
			{children}
		</ThemeProvider>
	)
}

export default Theme;