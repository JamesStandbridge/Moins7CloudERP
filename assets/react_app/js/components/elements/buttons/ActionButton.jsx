import React from 'react'
import styled from 'styled-components'

const ActionButton = ({onClick, children, Icon = null, color = null, fontColor = null, style = {}}) => {
	return (
		<Container style={style} className="noselect" onClick={onClick} color={color} fontColor={fontColor}>
			{Icon !== null ? (
				<IconContainer>
					<Icon />
				</IconContainer>
			) : (null)}

			
			<Title>{children}</Title>
		</Container>
	)
}

export default ActionButton

const IconContainer = styled.div`
	display: flex;
	align-items: center;
	margin-right: 7px;
`

const Container = styled.div`
	border: solid 1px #dedede;
	padding: 5px 15px 5px 7px;
	border-radius: 3px;
	cursor: pointer;
	display: flex;
	align-items: center;
	color: ${props => props.fontColor !== null ? props.fontColor : props.theme.typo};
	background-color: ${props => props.color !== null ? props.color : "white"};
	&:hover {
		${props => props.color === null ? "background-color: #f5f5f5;" : "opacity: 0.8;"}
		
	}
`

const Title = styled.h3`
	font-family: "Roboto Light", sans serif;
	margin: 0;
	font-size: 15px;
	margin-top: 1px;
`

