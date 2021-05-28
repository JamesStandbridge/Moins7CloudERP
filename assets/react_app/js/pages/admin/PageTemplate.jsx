import React from 'react'
import styled from 'styled-components'


const PageTemplate = ({children}) => {
	return (
		<>
			<Body>
				{children}
			</Body>
		</>
	)
}

export default PageTemplate



const Body = styled.div`
	
`