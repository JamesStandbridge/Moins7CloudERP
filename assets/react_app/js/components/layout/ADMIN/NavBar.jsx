import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import LogoImg from '../../../../img/app/logo_simple.png'
import IconButton from '@material-ui/core/IconButton'

import AbstractTab from '../AbstractTab'

import PeopleIcon from '@material-ui/icons/People'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import WidgetsIcon from '@material-ui/icons/Widgets'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'

const NavBar = ({onDisconnect, onSwitchTab, tab}) => {
	return (
		<>
			<Menu className="noselect"> 
				<a href="https://www.moins7.com" target="_blank">
					<MenuItem>
						<img src={LogoImg}/>
					</MenuItem>
				</a>
				<Link to={"/dashboard"} style={{textDecoration: "none"}}>
					<MenuItem onClick={() => onSwitchTab("Dashboard", "Dashboard")} selected={tab === "Dashboard"}> 
						<WidgetsIcon />
					</MenuItem>
				</Link>
				<Link to={"/loges"} style={{textDecoration: "none"}}>
					<MenuItem onClick={() => onSwitchTab("Loges", "Toutes les loges")} selected={tab === "Loges"}>
						<AccountBalanceIcon />
					</MenuItem>
				</Link>
				<Link to={"/adherents"} style={{textDecoration: "none"}}>
					<MenuItem onClick={() => onSwitchTab("Membres", "Adhérents")} selected={tab === "Membres"}>
						<PeopleIcon />
					</MenuItem>
				</Link>
				<Link to={"/dashboard"} style={{textDecoration: "none"}}>
					<MenuItem onClick={() => onSwitchTab("Statistiques", "Statistiques")} selected={tab === "Statistiques"}>
						<EqualizerIcon />
					</MenuItem>
				</Link>
				<Link to={"/dashboard"} style={{textDecoration: "none"}}>
					<MenuItem onClick={() => onSwitchTab("Calendrier", "Calendrier")} selected={tab === "Calendrier"}>
						<CalendarTodayIcon />
					</MenuItem>
				</Link>
				<MenuFooter>
					<MenuItem onClick={onDisconnect} selected={false}>
						<PowerSettingsNewIcon />
					</MenuItem>
				</MenuFooter>
			</Menu>	


			<Navigation>
				<AbstractTab />
			</Navigation>
		</>
	)
}

export default NavBar



const MenuFooter = styled.div`
    position: absolute;
    top: 91vh;
`

const MenuItem = styled.div`
	width: 80px;
    height: 80px;
	display: flex;
	justify-content: center;
	align-items: center; 
	cursor: pointer;
	transition: border-left-width 0.1s ease-in, padding-right 0.1s ease-in, color 0.1s ease-in, opacity 0.1s ease-in;
	border-left: ${props => props.selected ? "solid 4px " + props.theme.success : "none"};
	& > img {
		width: 61px;
	};
	& > svg {
		width: 40px;
		height: 40px;
		color: ${props => props.selected ? props.theme.success : props.theme.typo};		
	}
	&:hover {
		border-left: solid 4px ${props => props.theme.success};
	};
	&:hover > svg {
		color: ${props => props.theme.success};
	}
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
    left: 81px;
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
	width: 80px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	height: 100vh;
`