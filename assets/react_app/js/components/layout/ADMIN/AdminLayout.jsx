import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import NavBar from './NavBar'

import AvatarUI from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import NotificationsIcon from '@material-ui/icons/Notifications'
import HelpOutlineIcon from '@material-ui/icons/Help'

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: "white",
    backgroundColor: "#4dabb1",
    width: "50px",
    height: "50px",
    fontSize: "25px"
  },
}));

const AdminLayout = ({children, onDisconnect, onSwitchTab, tab, user}) => {
	const classes = useStyles();

	return (
		<Container>
			<NavBar
				onDisconnect={onDisconnect} 
				tab={tab} 
				onSwitchTab={onSwitchTab}
			/>
			<Header className="noselect">
				<BreadcrumbPart>
					<Breadcrumbs>Membres</Breadcrumbs>
					<BreadcrumbsSep>></BreadcrumbsSep>
					<Breadcrumbs>Adhérents</Breadcrumbs>

				</BreadcrumbPart>
				<HeaderPart>
					<UserInfos>
						<UserText>
							<UserName>{`${user.firstname} ${user.lastname}`}</UserName>
							<UserEmail>{`${user.email}`}</UserEmail>
						</UserText>
						<Avatar>
						<AvatarUI className={classes.avatar}>{user.firstname.substring(0,1)+user.lastname.substring(0,1)}</AvatarUI>
							<AvatarButton>
								<IconButton style={{padding: "0px", position: "absolute", left: "-2px", top: "0"}}>
									<ExpandMoreIcon />
								</IconButton>
							</AvatarButton>
						</Avatar>
					</UserInfos>
				</HeaderPart>
				<IconPart>
					<IconButton >
						<NotificationsIcon style={{fontSize: "30px"}}/>
					</IconButton>
				</IconPart>
				<IconPart>
					<Link to="/aide">
						<IconButton>
							<HelpOutlineIcon style={{fontSize: "30px"}}/>
						</IconButton>
					</Link>
				</IconPart>
			</Header>

			<Body>
				<BodyInner>
					{children}
				</BodyInner>
			</Body>
		</Container>
	)
}

export default AdminLayout

const BreadcrumbsSep = styled.h3 `
    font-family: "Roboto Light",sans serif;
    color: #b7b7b7;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    margin: 0 13px;
`

const Breadcrumbs = styled.h3`
    font-family: "Roboto Medium",sans serif;
    ccolor: ${props => props.theme.typo};
    margin: 0;
    font-size: 18px;
    font-weight: 500;
`

const BreadcrumbPart = styled.div`
	padding: 14px;
	height: 52px;
	float: left;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 20px;
`

const BodyInner = styled.div`
	width: 100%;
	height: auto;
`

const UserText = styled.div`
    margin-right: 100px;
`

const UserEmail = styled.h4`
	font-family: "Roboto Light", sans serif;
	margin: 0;
    font-weight: 500;
    font-size: 15px;
    margin-top: 10px;
    color: #0000007d;
`

const UserName = styled.h4`
	font-family: "Roboto Light", sans serif;
	margin: 0;
    font-weight: 500;
    font-size: 19px;
`

const UserInfos = styled.div`
	margin-left: auto;
	display: flex;
	margin-right: 20px;
`

const Container = styled.div`
`

const Avatar = styled.div`
	background-color: white;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	position: relative;
    border-radius: 50%;
    border: solid 1px #b7b7b7;
    padding: 1px;
`

const AvatarButton = styled.div`
    position: absolute;
    background-color: white;
    width: 21px;
    height: 21px;
    top: 15px;
    left: 39px;
    border-radius: 50%;
    border: solid 1px #dadada;
`

const Body = styled.div`
	position: absolute;
	left: 361px;
	top: 80px;
	width: calc(100% - 361px);
	z-index: 0;
	height: calc(100vh - 80px);
	overflow-y: hidden;
`

const Header = styled.div`
	height: 80px;
    border-bottom: solid 1px #dadada;
    background-color: white;
    position: fixed;
    left: 361px;
    overflow: hidden;
    top: 0;
    z-index: 9999;
    width: calc(100% - 361px);
`

const HeaderPart = styled.div`
	padding: 14px;
	height: 52px;
	float: right;
`

const IconPart = styled.div`
	padding: 14px;
	height: 52px;
	width: 50px;
	float: right;
	border-left: solid 1px #dadada;
	display: flex;
	justify-content: center;
	align-items: center; 
	
	& > svg {
		color: ${props => props.theme.icon};
		font-size: 30px;
	}
`

