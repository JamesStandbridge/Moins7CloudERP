import React from 'react'
import styled from 'styled-components'

import LogoImg from '../../../../img/app/logo_text.png'

import WidgetsIcon from '@material-ui/icons/Widgets';

const logoStyle = {
	width: "144px"
}

const AppBar = ({}) => {
	return (
		<Container>

		</Container>
	)
}

export default AppBar

const Icon = styled.div`
	color: ${props => props.theme.typo};
`

const Logo = styled.div`
	background-color: white;
    height: 127px;
    width: 146px;
    position: absolute;
    left: 43%;
    top: -22px;
    box-shadow: 0 9px 3px -6px rgb(0 0 0 / 12%), 0 7px 2px -6px rgb(0 0 0 / 24%);
`

const Container = styled.div`
	background-color: #f5efef;
	position: fixed;
	left: 0;
	top: 0;
	width: 50px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	height: 100vh;
	padding: 15px;
`