import React from 'react'
import GlobalFonts from './style/fonts/fonts'

import BaseTheme from './style/themes/BaseTheme'

import { ThemeProvider } from 'styled-components'

const Theme = ({children}) => {
	return (
		<ThemeProvider theme={BaseTheme}>
			<GlobalFonts />
			{children}
		</ThemeProvider>
	)
}

export default Theme;