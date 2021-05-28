import React from 'react'
import styled from 'styled-components'

const CancelButton = ({onClick, children, style = {}}) => {
	return (
		<Container style={style} className="noselect" onClick={onClick}>
			<Title>{children}</Title>
		</Container>
	)
}

export default CancelButton

const Container = styled.div`
	border: solid 1px #dedede;
	padding: 10px 20px 10px 20px;
	border-radius: 5px;
	cursor: pointer;
	display: flex;
	align-items: center;
	color: ${props => props.theme.typo};
	background-color: white;
	&:hover {
		opacity: 0.8;
	}
`

const Title = styled.h3`
	font-family: "Roboto Light", sans serif;
	margin: 0;
	font-size: 16px;
	margin-top: 1px;
	letter-spacing: 1px;
`

