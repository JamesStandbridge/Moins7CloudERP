import React from 'react'
import styled from 'styled-components'

import LogoImg from '../../../../img/app/logo_text.png'
import IconButton from '@material-ui/core/IconButton';

import PeopleIcon from '@material-ui/icons/People'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import WidgetsIcon from '@material-ui/icons/Widgets'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const logoStyle = {
	width: "144px"
}

const menuItemStyle = {width: "40px", height: "40px"}

const NavBar = ({onDisconnect}) => {
	return (
		<>
			<Menu>
				<MenuItem>
					<IconButton style={{padding: 0}}>
						<WidgetsIcon style={menuItemStyle} />
					</IconButton>
				</MenuItem>
				<MenuItem>
					<IconButton style={{padding: 0}}>
						<AccountBalanceIcon style={menuItemStyle} />
					</IconButton>
				</MenuItem>
				<MenuItem>
					<IconButton style={{padding: 0}}>
						<PeopleIcon style={menuItemStyle} />
					</IconButton>
				</MenuItem>
				<MenuItem>
					<IconButton style={{padding: 0}}>
						<EqualizerIcon style={menuItemStyle} />
					</IconButton>
				</MenuItem>
				<MenuItem>
					<IconButton style={{padding: 0}}>
						<CalendarTodayIcon style={menuItemStyle} />
					</IconButton>
				</MenuItem>

				<MenuFooter>
					<MenuItem>
						<IconButton onClick={onDisconnect} style={{padding: 0}}>
							<PowerSettingsNewIcon style={menuItemStyle} />
						</IconButton>
					</MenuItem>
				</MenuFooter>
			</Menu>
			<Navigation />
		</>
	)
}

export default NavBar

const MenuFooter = styled.div`
    position: absolute;
    top: 94vh;
`

const MenuItem = styled.div`
    margin-bottom: 30px;
`

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

const Navigation = styled.div`
    background-color: #f5efef;
    position: fixed;
    left: 72px;
    top: 0;
    width: 250px;
    height: 100vh;
    padding: 15px;
	box-shadow: inset -7px 0 9px -8px rgba(0,0,0,0.4);
`

const Menu = styled.div`
	background-color: #f5efef;
	position: fixed;
	left: 0;
	top: 0;
	width: 40px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	height: 100vh;
	padding: 15px;
`