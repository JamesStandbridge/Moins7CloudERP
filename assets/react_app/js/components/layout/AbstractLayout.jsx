import React from 'react'

import PresidentLayout from './ROLE_PRESIDENT/PresidentLayout'

const AbstractLayout = ({children, token, role, onDisconnect}) => {

	if(role === "ROLE_PRESIDENT") {
		return (
			<PresidentLayout onDisconnect={onDisconnect}>
				{children}
			</PresidentLayout>
		)
	} else {
		return (children)
	}
}

export default AbstractLayout