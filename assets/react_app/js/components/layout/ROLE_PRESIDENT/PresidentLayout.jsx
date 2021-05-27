import React from 'react'
import styled from 'styled-components'

import AppBar from './AppBar'
import NavBar from './NavBar'

const PresidentLayout = ({children, onDisconnect, onSwitchTab, tab}) => {
	return (
		<Container className="noselect">
			<NavBar
				onDisconnect={onDisconnect} 
				tab={tab} 
				onSwitchTab={onSwitchTab}
			/>
			{children}
		</Container>
	)
}

export default PresidentLayout

const Container = styled.div`

`