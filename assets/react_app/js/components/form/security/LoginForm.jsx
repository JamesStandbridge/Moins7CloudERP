import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import TextField from '../../elements/inputs/TextField'
import FormControl from '../../elements/inputs/FormControl'

import Button from '../../elements/buttons/Button'

import R_Security from "../../../API/repository/R_Security"

const LoginForm = ({SessionHandler, dispatch}) => {
	const [ credentials, setCredentials ] = useState({
		username: "",
		password: ""
	})

	const handleChange = ({currentTarget}) => {
		setCredentials({
			...credentials,
			[currentTarget.name]: currentTarget.value
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const res = await R_Security.login(credentials)
		if(res.status === 200) {
			const token = res.data.token
			dispatch({type: "session:authenticate", token})
		}
	}

	return (
		<Form autoComplete="off">
			<FormControl width={25}>
				<TextField
					onChange={handleChange}
					value={credentials.username}
					name="username"
					label="Nom d'utilisateur"
					autoComplete="off"
				/>
			</FormControl>

			<FormControl width={25}>
				<TextField
					onChange={handleChange}
					value={credentials.password}
					name="password"
					label="Mot de passe"
					type="password"
					autoComplete="off"
				/>
			</FormControl>

			<Footer>
				<FormControl width={25}>
					<Button type="submit" title="CONNEXION" onClick={(e) => handleSubmit(e)}/>
				</FormControl>
			</Footer>
		</Form>
	)
}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(LoginForm);

const Footer = styled.div`
	margin-top: 50px;
`

const Form = styled.form`
    margin: auto auto;
    margin-top: 30%;
    width: 37%;
    border: solid 1px grey;
    padding: 85px 50px;
`