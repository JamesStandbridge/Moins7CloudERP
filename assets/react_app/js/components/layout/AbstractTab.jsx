import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

const AbstractTab = ({NavigationHandler, dispatch}) => {
	const tab = NavigationHandler.currentTab
	const subTab = NavigationHandler.currentSubTab

	const handleClickSubTab = (newSubTab) => {
		dispatch({type: "navigation:subtab:change", subTab: newSubTab})
	}

	return (
		<>
			<TabTitle>{tab}</TabTitle>
			<Box>
				{tabs[tab].map((subTabInfos, index) => {
					return (
						<Link key={index} to={subTabInfos.link} style={{textDecoration: "none"}}>
							<SubTabTitle 								
								selected={subTabInfos.text === subTab}
								onClick={() => handleClickSubTab(subTabInfos.text)}
							>
								{subTabInfos.text}
							</SubTabTitle>
						</Link>
					)
				})}
			</Box>
		</>
	)
}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(AbstractTab)

const TabTitle = styled.h2`
	font-family: "Roboto Light", sans serif;
	color: ${props => props.theme.typo};
	margin: 8px 0 0 0;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 3px;
`

const Box = styled.div`
    margin-top: 50px;
    margin-left: 10px;
`

const SubTabTitle = styled.h3`
	font-family: "Roboto Light", sans serif;
	color: ${props => props.selected ? props.theme.success : props.theme.typo};
    margin-bottom: 30px;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
    	color: ${props => props.selected ? props.theme.success : "black"};
    };
`


const tabs = {
	Dashboard: [],
	Loges: [
		{text: "Toutes les loges", "link": ""}
	],
	Membres: [
		{text: "Adhérents", "link": "/adherents"},
		{text: "Représentants de loge", "link": "/representants-de-loge"},
		{text: "Conseil d'administration", "link": "/conseil-administration"},
	],
	Statistiques: [],
	Calendrier: []
}