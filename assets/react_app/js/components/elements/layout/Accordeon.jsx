import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

require("./anim.css");

const Accordeon = ({title, children, isExpanded = true}) => {
	const [expanded, setExpanded] = useState(true)

	useEffect(() => {
		setExpanded(isExpanded)
	}, [])

	return (
		<Container className="accordeon">
			<Title onClick={() => setExpanded(!expanded)} className="noselect">
				<TitleIcon>
					{expanded ? (<ArrowDropDownIcon/>) : (<ArrowRightIcon/>)}
				</TitleIcon>
				<TitleText>{title}</TitleText>
			</Title>
			<Content className={`accordeon-content ${expanded ? "expanded" : ""}`}>{children}</Content>
		</Container>
	)
}

export default Accordeon

const Container = styled.div`
	
`

const Title = styled.div`
	display: flex;
	cursor: pointer;
	align-items: center;
`

const TitleIcon = styled.div`
	
`

const TitleText = styled.h3`
	font-family: "Roboto Light", sans serif;
`

const Content = styled.div`
	margin-bottom: 50px;
`