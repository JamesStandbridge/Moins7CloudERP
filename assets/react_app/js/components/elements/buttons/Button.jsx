import React from 'react'
import styled from 'styled-components'

const Button = ({title, onClick, type}) => {
	return (
		<Container onClick={onClick} type={type}>
			{title}
		</Container>
	)
}

export default Button;

const Legend = styled.span`
	color: ${props => props.theme.info};
	font-family: 'Roboto Regular', sans-serif;
	font-weight: bold;
	font-size: 20px;
	letter-spacing: 5px;
`

const Container = styled.button`
	box-sizing: border-box;
	appearance: none;
	background-color: transparent;
	border: 2px solid ${props => props.theme.info};
	border-radius: 0.6em;
	color: ${props => props.theme.info};
	cursor: pointer;
	display: flex;
	align-self: center;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1;
	padding: 0.8em 2.8em;
	text-decoration: none;
	text-align: center;
	text-transform: uppercase;
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
	margin: 0 auto;
	&:hover, &:focus {
		color: #fff;
		outline: 0;
		box-shadow: 0 0 40px 40px ${props => props.theme.info} inset;
	}

`