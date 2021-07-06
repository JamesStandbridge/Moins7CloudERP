import React, { useState } from 'react'
import styled from 'styled-components'

require("./anim.css");

const Accordeon = ({title, children}) => {
	const [expanded, setExpanded] = useState(true)

	return (
		<Container className="accordeon">
			<Title onClick={() => setExpanded(!expanded)} className="noselect">
				<TitleIcon>v</TitleIcon>
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
`

const TitleIcon = styled.div`
	
`

const TitleText = styled.h3`

`

const Content = styled.div`
`