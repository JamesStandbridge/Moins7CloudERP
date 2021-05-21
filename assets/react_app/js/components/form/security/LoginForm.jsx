import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import TextField from '../../elements/inputs/TextField'
import FormControl from '../../elements/inputs/FormControl'

import Button from '../../elements/buttons/Button'

const LoginForm = (props) => {
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

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("submit")
	}

	return (
		<Form>
			<FormControl width={25}>
				<TextField
					onChange={handleChange}
					value={credentials.username}
					name="username"
					label="Nom d'utilisateur"
				/>
			</FormControl>

			<FormControl width={25}>
				<TextField
					onChange={handleChange}
					value={credentials.password}
					name="password"
					label="Mot de passe"
					type="password"
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

export default LoginForm;

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