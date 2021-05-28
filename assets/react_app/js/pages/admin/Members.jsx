import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PageTemplate from './PageTemplate'

import MemberTable from '../../components/table/MemberTable'
import MemberModalForm from '../../components/form/admin/member/MemberModalForm'

import R_Member from '../../API/repository/R_Member'

import Button from '../../components/elements/buttons/ActionButton'
import AddIcon from '@material-ui/icons/Add'


const Members = ({SessionHandler}) => {
	const [ members, setMembers ] = useState([])
	const [ loading, setLoading ] = useState(false) 

	useEffect(() => {
		const fetchMembers = async () => {
			const res = await R_Member.getAll(SessionHandler.token)
			if(res.status === 200) {
				setMembers(res.data.members)
			}
			setLoading(false)
		}
		setLoading(true)
		fetchMembers()
	}, [])

	return (
		<PageTemplate>
			<Container>
				<TableHeader>
					<TableCount>{`${members.length} membre${members.length > 1?'s':''}`}</TableCount>
					<MemberModalForm />
					
				</TableHeader>

				<MemberTable members={members} loading={loading} />
			</Container>
		</PageTemplate>
	)
}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(Members)

const Container = styled.div`
	padding: 60px 30px;
`

const TableHeader = styled.div`
	font-family: "Roboto Light", sans serif;
	display: flex;
	align-items: center;
	color: ${props => props.theme.typo};
`

const TableCount = styled.h3`
	margin: 0;
	margin-right: 50px;
`