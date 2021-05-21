import React from 'react'
import styled from 'styled-components'


const FormControl = ({children, width}) => {
	return (
		<Container width={width}>
			{children}
		</Container>
	)
}

export default FormControl;
 
const Container = styled.div`
	padding: 10px 30px;
	min-width: 250px;
	width: ${props => props.width}%;
	margin: 0 auto;
`