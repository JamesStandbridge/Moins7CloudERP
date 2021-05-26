import React from 'react'
import styled from 'styled-components'

import AppBar from './AppBar'
import NavBar from './NavBar'

const PresidentLayout = ({children, onDisconnect}) => {
	return (
		<Container>
			
			<NavBar onDisconnect={onDisconnect} />
			{children}
		</Container>
	)
}

export default PresidentLayout

const Container = styled.div`

`