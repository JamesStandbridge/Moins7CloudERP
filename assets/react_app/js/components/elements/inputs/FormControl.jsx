import React from 'react'
import styled from 'styled-components'


const FormControl = ({children, width, center = false}) => {
	return (
		<Container width={width} center={center}>
			{children}
		</Container>
	)
}

export default FormControl;
 
const Container = styled.div`
	position: relative;
	display: flex;
	padding: 10px 30px;
	min-width: 250px;
	width: ${props => props.width}%;
	margin: ${props => props.center ? "0 auto" : "0"};
`